import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../recipe.model';
import { Ingredient } from '../../../shared/models/Ingredient.model';
import { ShoppingListService } from '../../shooping-list/service/shopping-list.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css'],
})
export class RecipieDetailComponent implements OnInit {
  @Input() recipe!: Recipie;
  isOpen = false;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
