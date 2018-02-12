import { Injectable } from '@angular/core';
import {Http, Jsonp,Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";

@Injectable()
export class SetupService {
   headers: Headers;

  constructor(private jsonp: Jsonp, public http:Http) {
    this.headers = new Headers();
    this.headers.append('Authorization', 'Basic ' + btoa("sebastien:***REMOVED***"));
  }

  getSetup(name){
    console.log(environment.apiUrl);
    return this.http.get(environment.apiUrl+'/setups/'+name,{headers: this.headers})
      .map(res => res.json());
  }

  updateSetup(name, value){
    return this.http.put(environment.apiUrl+'/setups/'+name,{value:value}, {headers: this.headers})
      .map(res => res.json());
  }
}
