import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';

const routes: Routes = [
  {
    path: '', component: RestaurantComponent,
    children: [
      {
        path: '', redirectTo: 'restaurants', pathMatch: 'full'
      },
      {
        path: '', loadChildren: './restaurant-restaurant-list.module#RestaurantListModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
