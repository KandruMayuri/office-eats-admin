import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RestaurantListRoutingModule } from './restaurant-list-routing.module';
import { RestaurantListComponent } from './restaurant-list.component';
import { RestaurantService } from '../restaurant.service';

@NgModule({
  imports: [
    CommonModule,
    RestaurantListRoutingModule,
    HttpClientModule
  ],
  declarations: [RestaurantListComponent],
  providers: [
    RestaurantService
  ]
})
export class RestaurantListModule { }
