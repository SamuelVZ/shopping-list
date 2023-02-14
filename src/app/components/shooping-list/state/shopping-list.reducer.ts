import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from './shopping-list.actions';
import { Ingredient } from 'src/app/shared/models/Ingredient.model';

const ingredients: Ingredient[] = [
  { name: 'Apples', amount: 5 },
  { name: 'Tomatoes', amount: 10 },
];

const initialState = {
  ingredients: ingredients,
};

export const shoppingListReducer = createReducer(
  initialState,
  on(fromActions.addIngredient, (state, { ingredient }) => {
    return { ...state, ingredients: [...state.ingredients, ingredient] };
  }),
  on(fromActions.addIngredients, (state, { ingredients }) => {
    return { ...state, ingredients: [...state.ingredients, ...ingredients] };
  })
);

export function reducer(state = initialState, action: Action) {
  return shoppingListReducer(state, action);
}
