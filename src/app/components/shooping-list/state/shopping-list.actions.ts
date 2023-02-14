import { createAction, props } from '@ngrx/store';
import { Ingredient } from '../../../shared/models/Ingredient.model';

export const addIngredient = createAction(
  '[Shopping-list] Add Ingredient to the list',
  props<{ ingredient: Ingredient }>()
);
