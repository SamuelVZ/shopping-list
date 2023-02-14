import { createAction, props } from '@ngrx/store';
import { Ingredient } from '../../../shared/models/Ingredient.model';

export const addIngredient = createAction(
  '[Shopping-list] Add Ingredient to the store',
  props<{ ingredient: Ingredient }>()
);

export const addIngredients = createAction(
  '[Shopping-list] Add multiple Ingredients to the store',
  props<{ ingredients: Ingredient[] }>()
);

export const updatedIngredient = createAction(
  '[Shopping-list] Update an Ingredient to the store',
  props<{ index: number; ingredient: Ingredient }>()
);

export const deleteIngredient = createAction(
  '[Shopping-list] delete an Ingredient to the store',
  props<{ index: number }>()
);
