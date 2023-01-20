import { Injectable } from '@angular/core';
import { Recipie } from '../recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipies: Recipie[] = [
    {
      name: 'Tasty Schnitzel',
      description: 'A super tasty schnitzel',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1200px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: [
        { name: 'meat', amount: 1 },
        { name: 'French Fries', amount: 20 },
      ],
    },
    {
      name: 'Hamburguer',
      description: 'An awesome Hamburger',
      imagePath:
        'https://assets.unileversolutions.com/recipes-v2/230411.jpg?imwidth=1200',
      ingredients: [
        { name: 'meat', amount: 1 },
        { name: 'Buns', amount: 2 },
      ],
    },
  ];

  constructor() {}

  getRecipes(): Recipie[] {
    return this.recipies.slice();
  }

  getRecipeById(id: number): Recipie {
    return this.recipies[id];
  }
}
