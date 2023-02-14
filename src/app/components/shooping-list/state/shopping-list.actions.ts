import { createAction, props } from '@ngrx/store';
import { Ingredient } from '../../../shared/models/Ingredient.model';

export const addIngredient = createAction(
  '[Shopping-list] Add Ingredient to the list',
  props<{ ingredient: Ingredient }>()
);
export const addIngredients = createAction(
  '[Shopping-list] Add multiple Ingredients to the list',
  props<{ ingredients: Ingredient[] }>()
);
