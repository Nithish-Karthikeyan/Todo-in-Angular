import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class TodoInterceptor implements HttpInterceptor {

  constructor(private loadService : LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadService.setLoading();
    return next.handle(request).pipe(
           finalize(() => this.loadService.getLoading()),
     );
  }
}
