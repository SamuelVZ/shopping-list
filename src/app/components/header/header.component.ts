import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelect(selection: string) {
    if (selection === 'recipes') {
      this.router.navigate(['/recipes']);
    } else {
      this.router.navigate(['/shopping-list']);
    }
  }
}
