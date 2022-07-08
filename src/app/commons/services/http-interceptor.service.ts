import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  private headers: any;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.endsWith('public.company.com') ||
       request.url.endsWith('cdn.company.com') ||
       request.url.endsWith('live.company.com')) {
        this.headers = 
          request.headers
              .set('X-MEPL-Frontend', 'Test 2022')
              .set('Content-Type', 'application/json')
    } else {
      this.headers = request.headers.set('Content-Type', 'application/json')
    }

    const authReq = request.clone({
      headers: this.headers
    });

    console.log(authReq);

   return next.handle(authReq);
  }
}
