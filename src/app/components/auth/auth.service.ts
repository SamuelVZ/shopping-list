import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

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
  constructor(private http: HttpClient) {}

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
      .pipe(catchError(this.handleError));
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
      .pipe(catchError(this.handleError));
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
