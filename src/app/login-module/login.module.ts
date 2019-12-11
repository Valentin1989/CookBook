import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { RouterModule } from '@angular/router';
import { ValidationErrorsComponent } from '../common/components/validationsErrorsComponent/validationErrorsComponent';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ValidationErrorsComponent
  ],
  providers: []
})
export class LoginModule { }
