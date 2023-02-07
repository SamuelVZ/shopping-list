import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  constructor(
    private router: Router,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {}

  onSelect(selection: string) {
    if (selection === 'recipes') {
      this.router.navigate(['/recipes']);
    } else {
      this.router.navigate(['/shopping-list']);
    }
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
