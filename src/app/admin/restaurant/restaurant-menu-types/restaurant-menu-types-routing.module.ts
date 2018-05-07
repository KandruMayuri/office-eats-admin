import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantMenuTypesComponent } from './restaurant-menu-types.component';

const routes: Routes = [
  {
    path: '', component: RestaurantMenuTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantMenuTypesRoutingModule { }
