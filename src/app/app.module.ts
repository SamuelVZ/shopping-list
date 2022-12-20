import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipiesComponent } from './components/recipies/recipies.component';
import { RecipieListComponent } from './components/recipies/recipie-list/recipie-list.component';
import { RecipieDetailComponent } from './components/recipies/recipie-detail/recipie-detail.component';
import { RecipieItemComponent } from './components/recipies/recipie-list/recipie-item/recipie-item.component';
import { ShoopingListComponent } from './components/shooping-list/shooping-list.component';
import { ShoppingEditComponent } from './components/shooping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipieListComponent,
    RecipieDetailComponent,
    RecipieItemComponent,
    ShoopingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
