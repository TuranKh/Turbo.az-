import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = localStorage.getItem('token');

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken ? `${authToken}` : '')
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq).pipe(
      tap(
        (res) => {}),
        catchError(e => {
          if (e instanceof HttpErrorResponse && e.status === 401 || e instanceof HttpErrorResponse && e.status === 40) {
            localStorage.removeItem('token');
            window.location.href = '/login';
          }
          return throwError(e);
        })
    );
  }
}
