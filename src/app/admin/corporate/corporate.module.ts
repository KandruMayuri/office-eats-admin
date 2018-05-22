import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateRoutingModule } from './corporate-routing.module';
import { CorporateComponent } from './corporate.component';

@NgModule({
  imports: [
    CommonModule,
    CorporateRoutingModule
  ],
  declarations: [CorporateComponent]
})
export class CorporateModule { }
