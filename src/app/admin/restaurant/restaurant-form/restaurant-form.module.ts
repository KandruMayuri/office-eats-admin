import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantFormRoutingModule } from './restaurant-form-routing.module';
import { RestaurantFormComponent } from './restaurant-form.component';

@NgModule({
  imports: [
    CommonModule,
    RestaurantFormRoutingModule
  ],
  declarations: [RestaurantFormComponent]
})
export class RestaurantFormModule { }
