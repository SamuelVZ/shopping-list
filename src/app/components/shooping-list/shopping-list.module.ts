import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoopingListComponent } from './shooping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShoopingListComponent, ShoppingEditComponent],
  imports: [CommonModule, ReactiveFormsModule, ShoppingListRoutingModule],
})
export class ShoppingListModule {}
