import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantMenusComponent } from './restaurant-menus.component';

const routes: Routes = [
  {
    path: '', component: RestaurantMenusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantMenusRoutingModule { }
