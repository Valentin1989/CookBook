import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'validation-message',
  templateUrl: './validationErrorsComponent.html',
  styleUrls: ['./validationErrorsComponent.scss']
})

export class ValidationErrorsComponent implements OnChanges {

  @Input() errors;
  errorText: string;

  constructor() {
    this.errorText = '';
  }

  ngOnChanges(): void {
    this.getValidationMessage();
  }

  private getValidationMessage(): void {
    const messages: string[] = [];
    if (this.errors) {
      for (const errorName in this.errors) {
        switch (errorName) {
          case 'required':
            this.errorText = `This filed is required`;
            break;
          case 'minlength':
            this.errorText = `A field must be at least ${this.errors['minlength'].requiredLength} characters`;
            break;
        }
      }
    }
  }
}
