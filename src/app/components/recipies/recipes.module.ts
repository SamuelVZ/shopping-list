import { NgModule } from '@angular/core';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipieDetailComponent } from './recipie-detail/recipie-detail.component';
import { RecipieItemComponent } from './recipie-list/recipie-item/recipie-item.component';
import { RecipieListComponent } from './recipie-list/recipie-list.component';
import { RecipiesComponent } from './recipies.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RecipiesComponent,
    RecipieListComponent,
    RecipieDetailComponent,
    RecipieItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [SharedModule, RecipesRoutingModule, ReactiveFormsModule],
})
export class RecipesModule {}
