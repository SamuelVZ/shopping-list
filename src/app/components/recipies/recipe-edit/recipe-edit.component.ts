import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../service/recipe.service';
import { Recipie } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode = false;
  recipeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    const newRecipe: Recipie = { ...this.recipeForm.value };

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
      this.router.navigate([`/recipes/${this.id}`]);
    } else {
      this.recipeService.addRecipe(newRecipe);
      this.router.navigate(['/recipes']);
    }
  }

  onCancel() {
    if (this.editMode) {
      this.router.navigate([`/recipes/${this.id}`]);
    } else {
      this.router.navigate(['/recipes']);
    }
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray<FormGroup>([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe.ingredients.length > 0) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            this.fb.group({
              name: [ingredient.name, Validators.required],
              amount: [
                ingredient.amount,
                [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)],
              ],
            })
          );
        }
      }
    }

    this.recipeForm = this.fb.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImagePath, Validators.required],
      description: [recipeDescription, Validators.required],
      ingredients: recipeIngredients,
    });
  }

  onAddIngredient() {
    const ingredients = this.recipeForm.controls['ingredients'] as FormArray;

    ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        amount: [
          '',
          [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)],
        ],
      })
    );
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
