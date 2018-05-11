import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MultiSelectModule } from 'primeng/multiselect';

import { RestaurantFormRoutingModule } from './restaurant-form-routing.module';
import { RestaurantFormComponent } from './restaurant-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    RestaurantFormRoutingModule,
    MultiSelectModule
  ],
  declarations: [RestaurantFormComponent]
})
export class RestaurantFormModule { }
