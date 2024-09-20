import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  passwordFieldType: string = 'password';

  constructor(private fb: FormBuilder, private router: Router) {}

  logInForm: FormGroup = this.fb.group({
    userName: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z][a-zA-Z0-9_]{3,9}$/),
        Validators.minLength(4),
        Validators.maxLength(10),
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.maxLength(10), Validators.minLength(6)],
    ],
  });

  togglePasswordVisibility(): void {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  logInUser() {
    if (this.logInForm.invalid) {
      this.logInForm.markAllAsTouched();
    }
    this.router.navigateByUrl('/dashboard');
  }
}
