import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';

const routes: Routes = [
  {
    path: '', component: RestaurantComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'restaurants'
      },
      {
        path: '', loadChildren: './restaurant-list/restaurant-list.module#RestaurantListModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
