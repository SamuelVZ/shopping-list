import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs';
import { Recipie } from '../components/recipies/recipe.model';
import { RecipeService } from '../components/recipies/service/recipe.service';
import { AuthService } from '../components/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

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
    return this.authService.user.pipe(
      take(1), //to take one value from the observable and then unsubscribe
      exhaustMap((user) => {
        //waits for the fist observable to complete (authService.user), then return a new obervable that replaces the previous one
        let userToken: string = '';
        if (!!user) {
          userToken = user.token;
        }
        return this.http.get<Recipie[]>(
          'https://recipe-book-e2dc3-default-rtdb.firebaseio.com/recipes.json',
          { params: new HttpParams().set('auth', userToken), observe: 'body' }
        );
      }),
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
