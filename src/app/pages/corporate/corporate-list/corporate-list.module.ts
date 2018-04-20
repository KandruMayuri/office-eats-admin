import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { CorporateListRoutingModule } from './corporate-list-routing.module';
import { CorporateListComponent } from './corporate-list.component';
import { CorporateService } from '../corporate.service';

@NgModule({
  imports: [
    CommonModule,
    CorporateListRoutingModule,
    HttpClientModule
  ],
  declarations: [CorporateListComponent],
  providers: [
    CorporateService
  ]
})
export class CorporateListModule { }
