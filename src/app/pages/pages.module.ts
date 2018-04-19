import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    CollapseModule.forRoot()
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
