import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginResourceService } from '../../services/loginResource.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegistrationComponent implements OnInit {

  model: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private resourceService: LoginResourceService) {}

  ngOnInit(): void {
    this.model = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])]
    });
  }

  public registration(): void {
    this.resourceService.register({
      firstName: this.model.controls['firstName'].value,
      lastName: this.model.controls['lastName'].value,
      email: this.model.controls['email'].value,
      password: this.model.controls['password'].value
    }).subscribe(data => {
      console.log(data);
    });
  }

  public isShowValidationMessage(control: FormControl): boolean {
    const result = !control.valid && control.touched;
    return result;
  }
}
