import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {LoginResourceService} from '../../services/loginResource.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  model: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private resourceService: LoginResourceService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.model = this.formBuilder.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ],
    });
  }

  public login(): void {
    this.resourceService.login({
      email: this.model.controls['email'].value,
      password: this.model.controls['password'].value})
      .subscribe(result => {
        localStorage.setItem('access_token', result['jwtToken']);
        this.router.navigate(['home']);
      });
  }

  public isShowValidationMessage(control: FormControl): boolean {
    const result = !control.valid && control.touched;
    return result;
  }
}
