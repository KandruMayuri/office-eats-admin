import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

import { CorporateFormRoutingModule } from './corporate-form-routing.module';
import { CorporateFormComponent } from './corporate-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
    CorporateFormRoutingModule
  ],
  declarations: [CorporateFormComponent]
})
export class CorporateFormModule { }
