import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import {map, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
let token=""
@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {
  
  constructor(private cookieservice:CookieService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*const startTime = (new Date()).getTime();
    return next.handle(req).pipe(map(event => {
        if (event instanceof HttpResponse) {
            const endTime = (new Date).getTime();
            const responseTime = endTime - startTime;
            console.log(`${event.url} succeed in ${responseTime} ms`)
        }
        return event;
    }));*/
    const token = this.cookieservice.get('token');
    if (!token) {
          return next.handle(req);
        }
    const headers = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next.handle(headers);
    }
}
