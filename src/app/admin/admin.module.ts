import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserService } from '../shared/services/user.service';
import { RestaurantService } from './restaurant/restaurant.service';
import { CommonInterceptor } from '../shared/interceptors/common.interceptor';
import { TokenInterceptor } from '../shared/interceptors/token.interceptor';
import { RestaurantTypeFormComponent } from './restaurant/restaurant-type-form/restaurant-type-form.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, RestaurantTypeFormComponent],
  entryComponents: [RestaurantTypeFormComponent],
  providers: [
    UserService,
    RestaurantService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AdminModule { }
