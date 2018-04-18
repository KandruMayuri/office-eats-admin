import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCorporateRoutingModule } from './new-corporate-routing.module';
import { NewCorporateComponent } from './new-corporate.component';

@NgModule({
  imports: [
    CommonModule,
    NewCorporateRoutingModule
  ],
  declarations: [NewCorporateComponent]
})
export class NewCorporateModule { }
