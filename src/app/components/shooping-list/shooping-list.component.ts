import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/models/Ingredient.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css'],
})
export class ShoopingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    { name: 'Apples', amount: 5 },
    { name: 'Tomatoes', amount: 10 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
