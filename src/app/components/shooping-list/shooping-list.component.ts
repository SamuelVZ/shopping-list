import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { Ingredient } from '../../shared/models/Ingredient.model';
import { ShoppingListService } from './service/shopping-list.service';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css'],
})
export class ShoopingListComponent implements OnInit, OnDestroy {
  ingredients!: Observable<{ ingredients: Ingredient[] }>;
  // private ingChangedSub!: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    // this.ingChangedSub = this.shoppingListService.ingredientsChanged.subscribe(
    //   (newIngredients) => (this.ingredients = newIngredients)
    // );
  }

  ngOnDestroy(): void {
    // this.ingChangedSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
