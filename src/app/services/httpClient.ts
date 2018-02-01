import {Http, Jsonp, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import 'reflect-metadata';
import 'zone.js';


export class HttpClient {
  constructor(private jsonp: Jsonp, public http:Http) { }

  setAuthorizationHeader(header){
    header.append('Authorization', 'Basic ' + btoa("sebastien:***REMOVED***"));
    return header
  }

  get(url: string, headers: Headers = new Headers()){
    headers = this.setAuthorizationHeader(headers);

    return this.http.get(url,{headers: headers}).map(res => res.json());
  }
}
