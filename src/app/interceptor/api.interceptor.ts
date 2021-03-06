import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'reflect-metadata';
import 'zone.js';
import {environment} from "../../environments/environment";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept( req: HttpRequest<any>,  next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      headers: req.headers.set('Authorization', environment.apiAuth)
    });


    return next.handle(req).do(evt => {
      if (evt instanceof HttpResponse) {
      }
    });

  }
}
