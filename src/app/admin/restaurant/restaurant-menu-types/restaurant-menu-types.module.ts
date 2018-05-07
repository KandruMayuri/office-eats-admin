import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantMenuTypesRoutingModule } from './restaurant-menu-types-routing.module';
import { RestaurantMenuTypesComponent } from './restaurant-menu-types.component';

@NgModule({
  imports: [
    CommonModule,
    RestaurantMenuTypesRoutingModule
  ],
  declarations: [RestaurantMenuTypesComponent]
})
export class RestaurantMenuTypesModule { }
