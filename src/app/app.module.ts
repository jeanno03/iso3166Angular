import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Iso3166Component } from './iso3166/iso3166.component';
import { Iso3166ServiceService } from '../services/iso3166-service.service';
import { HomeComponent } from './home/home.component';
import { EditIso3166Component } from './edit-iso3166/edit-iso3166.component';
import { NewIso3166Component } from './new-iso3166/new-iso3166.component';
import { UserServiceService } from '../services/user-service.service';

const appRoutes:Routes=[
{path:'home',component:HomeComponent},
{path:'iso3166',component:Iso3166Component},
{path:'editIso3166/:pays',component:EditIso3166Component},
{path:'createIso3166',component:NewIso3166Component},
{path:'',redirectTo:'/home',pathMatch:'full'}
];
//test
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Iso3166Component,
    EditIso3166Component,
    NewIso3166Component
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),HttpModule,FormsModule
  ],
  providers: [Iso3166ServiceService,
  UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
