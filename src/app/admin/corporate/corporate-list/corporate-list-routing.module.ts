import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorporateListComponent } from './corporate-list.component';

const routes: Routes = [
  {
    path: '', component: CorporateListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateListRoutingModule { }
