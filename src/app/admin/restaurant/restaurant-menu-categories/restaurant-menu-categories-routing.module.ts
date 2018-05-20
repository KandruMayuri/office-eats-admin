import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantMenuCategoriesComponent } from './restaurant-menu-categories.component';
const routes: Routes = [
  {
    path: '', component: RestaurantMenuCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantMenuCategoriesRoutingModule { }
