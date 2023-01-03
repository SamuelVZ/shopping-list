import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../recipe.model';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css'],
})
export class RecipieDetailComponent implements OnInit {
  @Input() recipe!: Recipie;

  constructor() {}

  ngOnInit(): void {}
}
