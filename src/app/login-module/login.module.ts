import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { RouterModule } from '@angular/router';
import { ValidationErrorsComponent } from '../common/components/validationsErrorsComponent/validationErrorsComponent';
import { CommonModule } from '@angular/common';
import { LoginResourceService } from './services/loginResource.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ValidationErrorsComponent
  ],
  providers: [LoginResourceService]
})
export class LoginModule { }
