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
import { RestaurantMenuFormComponent } from './restaurant/restaurant-menu-form/restaurant-menu-form.component';
import { RestaurantMenuTypeFormComponent } from './restaurant/restaurant-menu-type-form/restaurant-menu-type-form.component';
import { GrowlModule } from 'primeng/growl';
import { MessageService } from 'primeng/components/common/messageservice';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AdminRoutingModule,
    GrowlModule
  ],
  declarations: [AdminComponent, RestaurantTypeFormComponent, RestaurantMenuFormComponent, RestaurantMenuTypeFormComponent],
  entryComponents: [RestaurantTypeFormComponent, RestaurantMenuFormComponent, RestaurantMenuTypeFormComponent],
  providers: [
    UserService,
    RestaurantService,
    MessageService,
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
