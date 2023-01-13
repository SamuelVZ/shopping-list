import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/models/Ingredient.model';
import { ShoppingListService } from './service/shopping-list.service';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css'],
})
export class ShoopingListComponent implements OnInit {
  ingredients!: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (newIngredients) => (this.ingredients = newIngredients)
    );
  }
}
