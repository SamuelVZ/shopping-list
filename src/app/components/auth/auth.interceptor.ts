import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, take, exhaustMap } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        let userToken = '';
        if (user) {
          userToken = user.token;
          const tokenRequest = request.clone({
            params: new HttpParams().set('auth', userToken),
          });
          return next.handle(tokenRequest);
        }
        return next.handle(request);
      })
    );
  }
}
