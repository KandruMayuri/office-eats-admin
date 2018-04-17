import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRestaurantComponent } from './new-restaurant.component';

const routes: Routes = [
  {
    path: '', component: NewRestaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRestaurantRoutingModule { }
