import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, switchMap, take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { IAppState, getAuthToken } from 'src/app/+store';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private store: Store<IAppState>
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getAuthToken).pipe(take(1), switchMap(token => {
      if (req.url.endsWith(`user/${environment.appKey}`) || req.url.endsWith('login')) {
        req = req.clone({
          setHeaders: {
            Authorization: `Basic ${btoa(`${environment.appKey}:${environment.appSecret}`)}`,
            'Content-Type': 'application/json'
          }
        });
      } else {
        req = req.clone({
          setHeaders: {
            Authorization: `Kinvey ${token}`
          }
        });
      }

      return next.handle(req)
        .pipe(
          tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse && req.url.endsWith('login')) {
              this.toastr.success('Logged in successfully', 'Success!');
              // this.authService.saveUserInfo(event.body);
            }
          }),
          catchError((err: HttpErrorResponse) => {
            if (err.status === 401) {
              this.toastr.error(err.error.description, err.error.error);
              this.router.navigate(['/login']);
            }

            return throwError(err);
          })
        );
    }));
  }
}
