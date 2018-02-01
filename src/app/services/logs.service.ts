import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import 'reflect-metadata';
import 'zone.js';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class LogsService {
  constructor(private http:HttpClient) { }

  getSensorLogs(){
    return this.http.get(environment.apiUrl+'/logs/sensors');
  }

  getPlugLogs(){
    return this.http.get(environment.apiUrl+'/logs/plugs');
  }
}
