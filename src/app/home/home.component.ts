import { UserServiceService } from './../../services/user-service.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'
import { User } from '../../model/model.user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  pageUser:any=null;
  pseudo:any=null;
  mdp2:string='';
  user:User=new User();

  constructor(public http:Http,public userServiceService : UserServiceService) { }

  ngOnInit() {
  }

  chercher(){
    this.userServiceService.getUser(this.pseudo)
.subscribe(data=>{
  this.pageUser = data;
  console.log("pseudo : "+this.pseudo);
  console.log("mdp2 : "+this.mdp2);
  console.log("mdp : "+this.pageUser.mdp);
  if(this.pageUser.mdp==this.mdp2){
    alert("Success authentification");
    console.log("Success")
  }
  else{
    alert("Echec authentification");
  }
},err=>{
  console.log("err");
})
  }

  creer(){
    this.userServiceService.createUser(this.user)
    .subscribe(data=>{
      this.user=data;
      alert('enregistrement OK');
    },err=>{
      console.log(err);
    })

  }


}
