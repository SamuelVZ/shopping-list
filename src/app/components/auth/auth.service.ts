import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError, Subject, tap, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;

  //extra fields for login
  displayName?: string;
  registered?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //it holds the previous value, so you can get it and not wait for the following next()
  user = new BehaviorSubject<User | null>(null);
  // user = new Subject<User>();

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCdAXjAhgHHOy8SkxH1JoyOizMOjXiYoYw',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((response) => {
          this.handleAuthentication(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
        }),
        catchError(this.handleError)
      );
    //catch error checks for the errors and the return if an error ocurred;
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCdAXjAhgHHOy8SkxH1JoyOizMOjXiYoYw',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((response) => {
          this.handleAuthentication(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);

    this.user.next(user);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMsg = 'An unknown error ocurred';

    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(() => new Error(errorMsg));
    }

    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMsg = 'This email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMsg = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMsg = 'Incorrect password';
        break;
      case 'USER_DISABLED':
        errorMsg = 'The user account has been disabled by an administrator';
        break;
    }
    return throwError(() => new Error(errorMsg));
  }
}
