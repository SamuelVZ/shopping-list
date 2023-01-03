import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selection: string = 'recipe';
  title = 'shopping-list';

  onSelection(e: string) {
    this.selection = e;
  }
}
