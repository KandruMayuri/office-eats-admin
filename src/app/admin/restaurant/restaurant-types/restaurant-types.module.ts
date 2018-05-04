import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantTypesRoutingModule } from './restaurant-types-routing.module';
import { RestaurantTypesComponent } from './restaurant-types.component';

@NgModule({
  imports: [
    CommonModule,
    RestaurantTypesRoutingModule
  ],
  declarations: [RestaurantTypesComponent]
})
export class RestaurantTypesModule { }
