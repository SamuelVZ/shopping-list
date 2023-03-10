import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../../recipe.model';
import { RecipeService } from '../../service/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css'],
})
export class RecipieItemComponent implements OnInit {
  @Input() recipe!: Recipie;
  @Input() id!: number;

  constructor() {}

  ngOnInit(): void {}
}
