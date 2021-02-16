import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import { IndexComponent } from './admin/index/index.component';
import { ShowComponent } from './admin/show/show.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { CreateComponent } from './admin/create/create.component';
import { UpdateComponent } from './admin/update/update.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin/apartments', 
   component: IndexComponent,
   canActivate: [AuthGuardService]
  },
  {path: 'admin/apartments/create', 
   component: CreateComponent,
   canActivate: [AuthGuardService]
  },
  {path: 'admin/apartments/show/:id/update/:id', 
   component: UpdateComponent,
   canActivate: [AuthGuardService]
  },
  {path: 'admin/apartments/show/:id', 
   component: ShowComponent,
   canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
