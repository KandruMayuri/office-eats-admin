import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { RestaurantFormRoutingModule } from './restaurant-form-routing.module';
import { RestaurantFormComponent } from './restaurant-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RestaurantFormRoutingModule
  ],
  declarations: [RestaurantFormComponent]
})
export class RestaurantFormModule { }
