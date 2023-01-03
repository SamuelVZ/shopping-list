import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipe.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
})
export class RecipiesComponent implements OnInit {
  recipieSelection!: Recipie;

  constructor() {}

  ngOnInit(): void {}

  // onSelectedRecipe(e: Recipie) {
  //   this.recipieSelection = e;
  // }
}
