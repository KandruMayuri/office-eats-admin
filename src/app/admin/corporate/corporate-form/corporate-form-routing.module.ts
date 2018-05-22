import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorporateFormComponent } from './corporate-form.component';

const routes: Routes = [
  {
    path: '', component: CorporateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateFormRoutingModule { }
