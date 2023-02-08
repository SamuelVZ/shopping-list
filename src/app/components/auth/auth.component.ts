import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  isLoginMode = true;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
    if (this.authForm.valid) {
      const email = this.authForm.value.email;
      const password = this.authForm.value.password;

      if (this.isLoginMode) {
      } else {
        await this.authService.signup(email, password).subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (e: HttpErrorResponse) => {
            console.log(e.error.error.message);
          },
          complete: () => {
            this.authForm.reset();
          },
        });
      }
    }
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
