import { Iso3166 } from './../model/model.iso3166';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class Iso3166ServiceService {

  constructor(public http: Http) {

  }

getIso3166s(motCle: string, page: number, size: number){
  return this.http.get("http://localhost:8080/chercherIso3166?mc=" + motCle + "&size=" + size + "&page=" + page)
  .map(resp => resp.json());
}

getIso3166(pays:string) {
  return this.http.get("http://localhost:8080/iso3166s/"+pays)
    .map(resp => resp.json());
}

saveIso3166(iso3166:Iso3166) {
  iso3166.url="assets/images/indisponible.jpeg";
  return this.http.post("http://localhost:8080/saveIso3166s",iso3166)
      .map(resp => resp.json());
}

updateIso3166(iso3166:Iso3166){
  return this.http.put("http://localhost:8080/iso3166s/"+iso3166.pays,iso3166)
.map(resp=>resp.json());
}

deleteIso3166(pays:string){
return this.http.delete("http://localhost:8080//iso3166s/"+pays)
.map(resp => resp.json());
}


}
