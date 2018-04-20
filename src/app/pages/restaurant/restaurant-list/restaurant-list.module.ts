import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantListRoutingModule } from './restaurant-list-routing.module';
import { RestaurantListComponent } from './restaurant-list.component';

@NgModule({
  imports: [
    CommonModule,
    RestaurantListRoutingModule
  ],
  declarations: [RestaurantListComponent]
})
export class RestaurantListModule { }
