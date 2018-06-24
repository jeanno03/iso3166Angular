import { Iso3166 } from './../../model/model.iso3166';
import { Iso3166ServiceService } from './../../services/iso3166-service.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iso3166',
  templateUrl: './iso3166.component.html',
  styleUrls: ['./iso3166.component.scss']
})
export class Iso3166Component implements OnInit {
  pageIso3166s:any;
  motCle: string = "";
  currentPage:number=0;
  size:number=5;
  pages : Array<number>;

  constructor(public http:Http,public iso3166ServiceService : Iso3166ServiceService,public router:Router) { }

  ngOnInit() {

  }

  doSearch(){
    this.iso3166ServiceService.getIso3166s(this.motCle, this.currentPage, this.size)
    .subscribe(data => {
      this.pageIso3166s = data;
      this.pages = new Array(data.totalPages);
    },err=>{
      console.log(err);
    })
  }

  chercher() {
    this.doSearch();
  }

  goToPage(i:number){
this.currentPage = i;
this.doSearch();

  }

  onEditIso3166(pays: string){
    console.log(pays);
    this.router.navigate(['editIso3166',pays]);
  }

  onDeleteIso3166(i:Iso3166){
    let confirm=window.confirm('Confirmez-vous la suppression?');
  if(confirm==true){
this.iso3166ServiceService.deleteIso3166(i.pays)
.subscribe(data=>{
  this.pageIso3166s.content.splice(
    this.pageIso3166s.content.indexOf(i),1
  );
  alert("suppression");
},err=>{
  console.log(err);
})
}
}
}