import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorporateComponent } from './corporate.component';

const routes: Routes = [
  {
    path: '', component: CorporateComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'list'
      },
      {
        path: 'list', loadChildren: './corporate-list/corporate-list.module#CorporateListModule'
      },
      {
        path: 'new', loadChildren: './new-corporate/new-corporate.module#NewCorporateModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateRoutingModule { }
