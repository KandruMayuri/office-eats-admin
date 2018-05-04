import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { baseURL } from './shared/constants/base-url';
import { StorageService } from './shared/services/storage.service';
import { AuthGuard } from './shared/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    StorageService,
    {
      provide: 'BaseURL',
      useValue: baseURL
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
