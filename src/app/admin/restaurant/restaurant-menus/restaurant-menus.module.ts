import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantMenusRoutingModule } from './restaurant-menus-routing.module';
import { RestaurantMenusComponent } from './restaurant-menus.component';

@NgModule({
  imports: [
    CommonModule,
    RestaurantMenusRoutingModule
  ],
  declarations: [RestaurantMenusComponent]
})
export class RestaurantMenusModule { }
