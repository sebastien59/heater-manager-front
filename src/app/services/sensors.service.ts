import { Injectable } from '@angular/core';
import {Http, Jsonp,Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";

@Injectable()
export class SensorsService {

  constructor(private jsonp: Jsonp, public http:Http) { }

  getSensors(){
    let headers: Headers = new Headers();
    headers.append('Authorization', environment.apiAuth);

    return this.http.get(environment.apiUrl+'/sensors/',{headers: headers})
      .map(res => res.json());
  }

  addSensor(ip, name,room){
    let headers: Headers = new Headers();
    headers.append('Authorization', environment.apiAuth);

    return this.http.post(environment.apiUrl+'/sensors/',{ip:ip, name:name, room:environment.apiUrl+'/rooms/'+room},{headers: headers})
      .map(res => res.json());
  }
}
