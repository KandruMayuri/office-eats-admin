import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { NewCorporateRoutingModule } from './new-corporate-routing.module';
import { NewCorporateComponent } from './new-corporate.component';
import { CorporateService } from '../corporate.service';

@NgModule({
  imports: [
    CommonModule,
    NewCorporateRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgBootstrapFormValidationModule
  ],
  declarations: [NewCorporateComponent],
  providers: [
    CorporateService
  ]
})
export class NewCorporateModule { }
