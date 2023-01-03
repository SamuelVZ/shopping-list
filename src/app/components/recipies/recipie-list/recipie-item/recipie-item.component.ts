import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../../recipe.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css'],
})
export class RecipieItemComponent implements OnInit {
  @Input() recipe!: Recipie;

  constructor() {}

  ngOnInit(): void {}
}
