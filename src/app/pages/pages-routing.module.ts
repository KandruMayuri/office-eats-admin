import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: '/'
      },
      {
        path: '', loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'restaurant', loadChildren: './restaurant/restaurant.module#RestaurantModule'
      },
      {
        path: 'corporate', loadChildren: './corporate/corporate.module#CorporateModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
