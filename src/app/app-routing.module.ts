import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'auth'
  },
  {
    path: '', loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
