import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/Ingredient.model';
import * as ShoppingListActions from '../state/shopping-list.actions';
@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    { name: 'Apples', amount: 5 },
    { name: 'Tomatoes', amount: 10 },
  ];

  constructor(
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  getIngredients(): Observable<{ ingredients: Ingredient[] }> {
    // return this.ingredients.slice();
    return this.store.select('shoppingList');
  }

  getIngredient(index: number): Ingredient {
    // return this.ingredients[index];
    let ingredientSelected: Ingredient = { name: '', amount: 0 };
    this.store.select('shoppingList').subscribe((state) => {
      ingredientSelected = state.ingredients[index];
    });
    return ingredientSelected;
  }

  addIngredient(newIngredient: Ingredient) {
    this.store.dispatch(
      ShoppingListActions.addIngredient({ ingredient: newIngredient })
    );
  }
  addIngredients(ingredients: Ingredient[]) {
    // spread operator "..." transform an array into a list
    // this.ingredients.push(...ingredients);
    // this.ingredientsChanged.next(this.ingredients.slice());
    this.store.dispatch(
      ShoppingListActions.addIngredients({ ingredients: ingredients })
    );
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    // this.ingredients[index] = newIngredient;
    // this.ingredientsChanged.next(this.ingredients.slice());
    this.store.dispatch(
      ShoppingListActions.updatedIngredient({
        index: index,
        ingredient: newIngredient,
      })
    );
  }

  deleteIngredient(index: number) {
    // this.ingredients.splice(index, 1);
    // this.ingredientsChanged.next(this.ingredients.slice());
    this.store.dispatch(ShoppingListActions.deleteIngredient({ index: index }));
  }
}
