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
        // this.shoppingListForm;
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

  onAddItem() {
    if (this.shoppingListForm.valid) {
      const newIngredient: Ingredient = {
        name: this.shoppingListForm.get('name')?.value,
        amount: this.shoppingListForm.controls['amount'].value,
      };

      this.shoppingListService.addIngredient(newIngredient);
    }
  }
}
