import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login-module/components/login/login.component';
import {RegistrationComponent} from './login-module/components/registration/registration.component';
import {MainPageComponent} from './main-module/components/mainPage/mainPage.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent, pathMatch: 'full' },
  { path: 'home', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
