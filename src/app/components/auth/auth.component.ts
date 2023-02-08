import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  isLoginMode = true;
  isLoading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.authForm.valid) {
      const email = this.authForm.value.email;
      const password = this.authForm.value.password;

      let authObersvable: Observable<AuthResponseData>;

      this.isLoading = true;

      if (this.isLoginMode) {
        authObersvable = this.authService.login(email, password);
      } else {
        authObersvable = this.authService.signup(email, password);
      }

      //the observable will be only of one type because of the if else block,
      // since we are making the same operations on the subscription on both we make only one subscription
      authObersvable.subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (e) => {
          console.log(e);
          this.error = e;
          this.isLoading = false;
        },
        complete: () => {
          this.authForm.reset();
          this.isLoading = false;
          this.router.navigate(['/recipes']);
        },
      });
    }
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
