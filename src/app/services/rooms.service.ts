import { Injectable } from '@angular/core';
import {Http, Jsonp,Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import 'reflect-metadata';
import 'zone.js';

@Injectable()
export class RoomsService {

  constructor(private jsonp: Jsonp, public http:Http) { }

  getRooms(){
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa("sebastien:TUy7,j3("));
    console.log(environment.apiUrl)
    return this.http.get(environment.apiUrl+'/rooms/',{headers: headers})
      .map(res => res.json());
  }

}
