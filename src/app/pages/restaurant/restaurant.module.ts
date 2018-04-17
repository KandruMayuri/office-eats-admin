import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';

@NgModule({
  imports: [
    CommonModule,
    RestaurantRoutingModule
  ],
  declarations: [RestaurantComponent]
})
export class RestaurantModule { }
