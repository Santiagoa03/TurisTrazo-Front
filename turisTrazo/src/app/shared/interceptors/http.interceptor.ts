import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

  private cookieService = inject(CookieService);
  private router = inject(Router);

  constructor(private toastr: ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // Verifica si la URL es /login y si es así, no apliques el interceptor.
    if (request.url.endsWith('/login')) {
      return next.handle(request);
    }

    const isMultipart = request.body instanceof FormData;

    let headers: HttpHeaders;
    if (isMultipart) {
      headers = new HttpHeaders();
    } else {
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.cookieService.get('Bearer')}`,
      });
    }

    const clonedRequest = request.clone({ headers });

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate(['/not-logged']);
        } else if (error.name === "HttpErrorResponse"
        ) {
          this.toastr.error("En este momento no podemos atender tu solicitud. Inténtalo más tarde");
        }
        return throwError(error);
      })
    );
  }
}

