import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateListRoutingModule } from './corporate-list-routing.module';
import { CorporateListComponent } from './corporate-list.component';

@NgModule({
  imports: [
    CommonModule,
    CorporateListRoutingModule
  ],
  declarations: [CorporateListComponent]
})
export class CorporateListModule { }
