import { Iso3166ServiceService } from './../../services/iso3166-service.service';
import { Iso3166 } from './../../model/model.iso3166';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-iso3166',
  templateUrl: './edit-iso3166.component.html',
  styleUrls: ['./edit-iso3166.component.scss']
})
export class EditIso3166Component implements OnInit {
  mode: number = 1;
  iso3166 : Iso3166 = new Iso3166();
  idPays:string;

  constructor(public activatedRoute: ActivatedRoute,
  public iso3166service : Iso3166ServiceService,
  public router:Router){
this.idPays=activatedRoute.snapshot.params['pays'];
  }


  ngOnInit() {
    this.iso3166service.getIso3166(this.idPays)
    .subscribe(data =>{
      this.iso3166=data;
    },err=>{
      console.log(err);
    })
  }

  updateIso3166(){
    this.iso3166service.updateIso3166(this.iso3166).subscribe(data=>{
      alert("Mise à jour effectuée");
      this.router.navigate(['iso3166']);
      console.log(data);
    },err=>{
      console.log(err);
      alert("Problème")
    })
  }

}
