import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';

const routes: Routes = [
  {
    path: '', component: RestaurantComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'list'
      },
      {
        path: 'list', loadChildren: './restaurant-list/restaurant-list.module#RestaurantListModule',
      },
      {
        path: 'new', loadChildren: './new-restaurant/new-restaurant.module#NewRestaurantModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
