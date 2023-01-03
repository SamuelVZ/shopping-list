import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../../recipe.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css'],
})
export class RecipieItemComponent implements OnInit {
  @Input() recipe!: Recipie;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onSelectRecipe() {
    this.recipeSelected.emit();
  }
}
