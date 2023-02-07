import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Recipie } from '../components/recipies/recipe.model';
import { RecipeService } from '../components/recipies/service/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put(
        'https://recipe-book-e2dc3-default-rtdb.firebaseio.com/recipes.json',
        recipes,
        { observe: 'response' }
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    this.http
      .get<Recipie[]>(
        'https://recipe-book-e2dc3-default-rtdb.firebaseio.com/recipes.json',
        { observe: 'body' }
      )
      .pipe(
        map((recipies) => {
          return recipies.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
