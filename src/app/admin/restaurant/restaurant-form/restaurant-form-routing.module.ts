import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantFormComponent } from './restaurant-form.component';

const routes: Routes = [
  {
    path: '', component: RestaurantFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantFormRoutingModule { }
