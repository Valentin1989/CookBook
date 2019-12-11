import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
    private resourceService: LoginResourceService) {
  }

  ngOnInit(): void {
    this.model = this.formBuilder.group({
      login: ['', Validators.required ],
      password: ['', Validators.required ],
    });
  }

  public login(): void {
    this.resourceService.login({
      login: this.model.controls['login'].value,
      password: this.model.controls['password'].value
    }).subscribe(data => console.log(data));
  }

  public isShowValidationMessage(control: FormControl): boolean {
    const result = !control.valid && control.touched;
    return result;
  }
}
