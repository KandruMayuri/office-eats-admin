import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantTypesComponent } from './restaurant-types.component';

const routes: Routes = [
  {
    path: '', component: RestaurantTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantTypesRoutingModule { }
