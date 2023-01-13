import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../../recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css'],
})
export class RecipieItemComponent implements OnInit {
  @Input() recipe!: Recipie;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onSelectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
