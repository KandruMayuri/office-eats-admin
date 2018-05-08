import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { RestaurantFormRoutingModule } from './restaurant-form-routing.module';
import { RestaurantFormComponent } from './restaurant-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    RestaurantFormRoutingModule
  ],
  declarations: [RestaurantFormComponent]
})
export class RestaurantFormModule { }
