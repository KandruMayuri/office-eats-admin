import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantMenuCategoriesRoutingModule } from './restaurant-menu-categories-routing.module';
import { RestaurantMenuCategoriesComponent } from './restaurant-menu-categories.component';

@NgModule({
  imports: [
    CommonModule,
    RestaurantMenuCategoriesRoutingModule
  ],
  declarations: [RestaurantMenuCategoriesComponent]
})
export class RestaurantMenuCategoriesModule { }
