import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/services/auth.guard';

import { LoginComponent } from './login-module/components/login/login.component';
import { RegistrationComponent } from './login-module/components/registration/registration.component';
import { MainPageComponent } from './main-module/components/mainPage/mainPage.component';
import { CategoryPageComponent } from './category-module/components/categoryPage/categoryPage.component';

const categoryRoutes: Routes = [
  { path: 'category/:id', component: CategoryPageComponent }
];

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent, pathMatch: 'full' },
  { path: 'home', component: MainPageComponent, canActivate: [ AuthGuard ], children: categoryRoutes },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
