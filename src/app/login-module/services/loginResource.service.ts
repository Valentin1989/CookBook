import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { RegistrationModel } from '../models/registration.model';

@Injectable()
export class LoginResourceService {

  constructor(private http: HttpClient) { }

  public register(data: RegistrationModel): Observable<any> {
    return this.http.post('', data)
      .pipe(response => {
        return response;
      });
  }

  public login(data: LoginModel) {
    return this.http.post('', data)
      .subscribe(response => {
        return response;
      });
  }
}
