import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RestaurantTypesRoutingModule } from './restaurant-types-routing.module';
import { RestaurantTypesComponent } from './restaurant-types.component';

@NgModule({
  imports: [
    CommonModule,
    RestaurantTypesRoutingModule,
    NgbModule
  ],
  declarations: [RestaurantTypesComponent]
})
export class RestaurantTypesModule { }
