import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRestaurantRoutingModule } from './new-restaurant-routing.module';
import { NewRestaurantComponent } from './new-restaurant.component';

@NgModule({
  imports: [
    CommonModule,
    NewRestaurantRoutingModule
  ],
  declarations: [NewRestaurantComponent]
})
export class NewRestaurantModule { }
