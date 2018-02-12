import { Injectable } from '@angular/core';
import {Http, Jsonp,Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";

@Injectable()
export class PlugsService {

  constructor(private jsonp: Jsonp, public http:Http) { }

  updatePlug(plug){
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa("sebastien:***REMOVED***"));
    console.log(!plug.state);
    return this.http.put(environment.apiUrl+'/plugs/'+plug.id+'/',{ip: plug.ip,state:!plug.state},{headers: headers})
      .map(res => res.json());
  }

  addPlug(ip, name, room){
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa("sebastien:***REMOVED***"));

    return this.http.post(environment.apiUrl+'/plugs/',{ip:ip, name:name, room:environment.apiUrl+'/rooms/'+room},{headers: headers})
      .map(res => res.json());
  }
}
