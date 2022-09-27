import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buffer } from 'buffer';
import { AuthService } from '../auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //const TOKEN : string = Buffer.from(`${this.authService.user}:${this.authService.password}`).toString('base64');

    if(this.authService.token === ''){
      return next.handle(request);
    }
    const TOKEN : string = Buffer.from(this.authService.token).toString('base64');
   
    const HEADER_REQUEST : HttpRequest<any> = request.clone({
      headers: request.headers.set('Authorization',`Bearer ${TOKEN}`) 
    });
    console.log(HEADER_REQUEST);
    return next.handle(HEADER_REQUEST);
  }
}
