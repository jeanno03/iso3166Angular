import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { User } from '../model/model.user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public http:Http) { }

getUser(pseudo:string){
  return this.http.get("http://localhost:8080/user/"+pseudo)
  .map(resp=>resp.json());
}

createUser(user:User){
  return this.http.post("http://localhost:8080/createUser/",user)
  .map(resp=>resp.json());
}
}
