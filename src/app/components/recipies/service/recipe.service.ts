import { Injectable, EventEmitter } from '@angular/core';
import { Recipie } from '../recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipies: Recipie[] = [
    {
      name: 'test',
      description: 'this is a test',
      imagePath:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',
    },
    {
      name: 'test 2',
      description: 'this is a second test',
      imagePath:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',
    },
  ];
  recipeSelected = new EventEmitter<Recipie>();

  constructor() {}

  getRecipes(): Recipie[] {
    return this.recipies.slice();
  }
}
