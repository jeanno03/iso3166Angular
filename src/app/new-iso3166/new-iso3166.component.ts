import { Iso3166ServiceService } from './../../services/iso3166-service.service';
import { Component, OnInit } from '@angular/core';
import { Iso3166 } from '../../model/model.iso3166';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-iso3166',
  templateUrl: './new-iso3166.component.html',
  styleUrls: ['./new-iso3166.component.scss']
})
export class NewIso3166Component implements OnInit {
  iso3166: Iso3166 = new Iso3166();
  pageIso3166s:any;
  motCle: string = "";
  currentPage:number=0;
  size:number=5;
  pages : Array<number>;
  constructor(public iso3166Service: Iso3166ServiceService,public router:Router) { }

  ngOnInit() {
  }



  saveIso3166(i:Iso3166){
let confirm=window.confirm('Confirmez-vous l\'enregistrement?');
if(confirm==true){
  
  this.iso3166Service.saveIso3166(i)
  .subscribe(data=>{
    this.motCle=i.pays;
    this.router.navigate(['iso3166']);
    //this.doSearch();
    alert("Enregistrement OK");
  },err=>{
    console.log(err);
  })
 }
}

}
