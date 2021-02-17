import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './admin/index/index.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { ShowComponent } from './admin/show/show.component';
import { CreateComponent } from './admin/create/create.component';
import { UpdateComponent } from './admin/update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './shared/modal/modal.component';
import { DropdownDirective } from './shared/dropdown/dropdown.directive';
import { AuthLogService } from './auth/auth-log.service';
import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    IndexComponent,
    RegisterComponent,
    HomeComponent,
    ShowComponent,
    CreateComponent,
    UpdateComponent,
    ModalComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ClickOutsideModule
  ],
  providers: [
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthLogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
