import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipiesComponent } from './components/recipies/recipies.component';
import { ShoopingListComponent } from './components/shooping-list/shooping-list.component';
import { RecipieDetailComponent } from './components/recipies/recipie-detail/recipie-detail.component';
import { RecipeStartComponent } from './components/recipies/recipe-start/recipe-start.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipiesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: ':id', component: RecipieDetailComponent },
    ],
  },
  { path: 'shopping-list', component: ShoopingListComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
