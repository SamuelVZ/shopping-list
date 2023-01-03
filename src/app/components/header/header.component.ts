import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() selected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelect(selection: string) {
    this.selected.emit(selection);
  }
}
