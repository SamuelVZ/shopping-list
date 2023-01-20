import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/models/Ingredient.model';
import { ShoppingListService } from './service/shopping-list.service';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css'],
})
export class ShoopingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  private ingChangedSub!: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingChangedSub = this.shoppingListService.ingredientsChanged.subscribe(
      (newIngredients) => (this.ingredients = newIngredients)
    );
  }

  ngOnDestroy(): void {
    this.ingChangedSub.unsubscribe();
  }
}
