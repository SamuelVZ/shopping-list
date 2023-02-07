import { Injectable } from '@angular/core';
import { Recipie } from '../recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipie[]>();
  private recipes: Recipie[] = [];
  //   {
  //     name: 'Tasty Schnitzel',
  //     description: 'A super tasty schnitzel',
  //     imagePath:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1200px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
  //     ingredients: [
  //       { name: 'meat', amount: 1 },
  //       { name: 'French Fries', amount: 20 },
  //     ],
  //   },
  //   {
  //     name: 'Hamburguer',
  //     description: 'An awesome Hamburger',
  //     imagePath:
  //       'https://assets.unileversolutions.com/recipes-v2/230411.jpg?imwidth=1200',
  //     ingredients: [
  //       { name: 'meat', amount: 1 },
  //       { name: 'Buns', amount: 2 },
  //     ],
  //   },
  // ];

  constructor() {}

  setRecipes(recipes: Recipie[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(): Recipie[] {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipie {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipie) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipie) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
