import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'restaurants'
      },
      {
        path: 'restaurants', loadChildren: './restaurant/restaurant.module#RestaurantModule'
      },
      {
        path: 'restaurant/new', loadChildren: './restaurant/restaurant-form/restaurant-form.module#RestaurantFormModule'
      },
      {
        path: 'restaurant/types', loadChildren: './restaurant/restaurant-types/restaurant-types.module#RestaurantTypesModule'
      },
      {
        path: 'restaurant/menus', loadChildren: './restaurant/restaurant-menus/restaurant-menus.module#RestaurantMenusModule'
      },
      {
        path: 'restaurant/menu/types',
        loadChildren: './restaurant/restaurant-menu-types/restaurant-menu-types.module#RestaurantMenuTypesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
