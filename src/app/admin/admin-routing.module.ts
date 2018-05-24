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
        path: 'restaurant/edit/:id', loadChildren: './restaurant/restaurant-form/restaurant-form.module#RestaurantFormModule'
      },
      {
        path: 'restaurant/types', loadChildren: './restaurant/restaurant-types/restaurant-types.module#RestaurantTypesModule'
      },
      {
        path: 'restaurant/menu/:id',
        loadChildren: './restaurant/restaurant-menus/restaurant-menus.module#RestaurantMenusModule'
      },
      {
        path: 'restaurant/menu-categories',
        loadChildren: './restaurant/restaurant-menu-categories/restaurant-menu-categories.module#RestaurantMenuCategoriesModule'
      },
      {
        path: 'corporates', loadChildren: './corporate/corporate.module#CorporateModule'
      },
      {
        path: 'corporate/new', loadChildren: './corporate/corporate-form/corporate-form.module#CorporateFormModule'
      },
      {
        path: 'corporate/edit/:id',  loadChildren: './corporate/corporate-form/corporate-form.module#CorporateFormModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
