import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    //remove the module from app.component imports[] since it is ogint to be loaded once it go to this route
    loadChildren: () =>
      import('./components/recipies/recipes.module').then(
        (m) => m.RecipesModule
      ),
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('./components/shooping-list/shopping-list.module').then(
        (m) => m.ShoppingListModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), //loads the actual route, when it finish loads the pending modules
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
