import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Recipie } from './recipe.model';
import { DataStorageService } from '../../shared/data-storage.service';
import { RecipeService } from './service/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesResolver implements Resolve<Recipie[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipie[]> | Recipie[] {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      //not subscribing here cause the resolver will subscribe automatically
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
