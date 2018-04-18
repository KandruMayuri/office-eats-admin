import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCorporateComponent } from './new-corporate.component';

const routes: Routes = [
  {
    path: '', component: NewCorporateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewCorporateRoutingModule { }
