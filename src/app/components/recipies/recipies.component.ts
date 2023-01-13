import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipe.model';
import { RecipeService } from './service/recipe.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
})
export class RecipiesComponent implements OnInit {
  recipieSelection!: Recipie;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe) => (this.recipieSelection = recipe)
    );
  }

  // onSelectedRecipe(e: Recipie) {
  //   this.recipieSelection = e;
  // }
}
