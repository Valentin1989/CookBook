import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { RegistrationModel } from '../models/registration.model';

@Injectable()
export class LoginResourceService {

  constructor(private http: HttpClient) { }

  public register(data: RegistrationModel) {
    return this.http.post('http://localhost:3002/user/registerNewUser', data, {responseType: 'text'})
      .pipe(response => {
        return response;
      });
  }

  public login(data: LoginModel) {
    return this.http.post('http://localhost:3002/user/login', data)
      .pipe(response => {
        return response;
      });
  }

  public logout(): void {
    localStorage.removeItem('access_token');
  }
}
