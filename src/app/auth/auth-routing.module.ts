import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'sign-in'
      },
      {
        path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
