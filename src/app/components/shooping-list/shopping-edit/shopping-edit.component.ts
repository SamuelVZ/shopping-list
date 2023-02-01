import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../../shared/models/Ingredient.model';
import { ShoppingListService } from '../service/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  shoppingListForm!: FormGroup;
  subscription!: Subscription;
  editMode = false;
  editItemIndex!: number;
  editItem!: Ingredient;

  constructor(
    private shoppingListService: ShoppingListService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();

    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editItem = this.shoppingListService.getIngredient(index);

        this.shoppingListForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  buildForm() {
    this.shoppingListForm = this.fb.group({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', [
        Validators.required,
        Validators.pattern('^[1-9]+[0-9]*$'),
      ]),
    });
  }

  onSubmit() {
    if (this.shoppingListForm.valid) {
      const newIngredient: Ingredient = {
        name: this.shoppingListForm.get('name')?.value,
        amount: this.shoppingListForm.controls['amount'].value,
      };

      if (this.editMode) {
        this.shoppingListService.updateIngredient(
          this.editItemIndex,
          newIngredient
        );
      } else {
        this.shoppingListService.addIngredient(newIngredient);
      }
      this.editMode = false;
      this.shoppingListForm.reset();
    }
  }

  onClear() {
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
}
