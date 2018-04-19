import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NewRestaurantRoutingModule } from './new-restaurant-routing.module';
import { NewRestaurantComponent } from './new-restaurant.component';
import { RestaurantService } from '../restaurant.service';

@NgModule({
  imports: [
    CommonModule,
    NewRestaurantRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [NewRestaurantComponent],
  providers: [
    RestaurantService
  ]
})
export class NewRestaurantModule { }
