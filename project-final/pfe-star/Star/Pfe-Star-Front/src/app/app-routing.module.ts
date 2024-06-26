import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './monotoring/dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { UnauthorizedComponent } from './component/unauthorized/unauthorized.component';

import {CarsComponent} from "./component/cars/cars.component";
import { AddCarsComponent } from './component/add-cars/add-cars.component';
import { ListeAgenceComponent } from './component/liste-agence/liste-agence.component';
import {IndexComponent} from "./component/index/index.component";
import {FaqComponent} from "./component/faq/faq.component";
import {PricingComponent} from "./component/agence/pricing.component";
import {AccountComponent} from "./component/account/account.component";
import {ArticleComponent} from "./component/article/article.component";
import {AdminComponent} from "./component/admin/admin.component";
import {AgenceTableComponent} from "./component/agence-table/agence-table.component";
import {ClientTableComponent} from "./component/client-table/client-table.component";
import {AllCarsComponent} from "./component/all-cars/all-cars.component";
import {AllLocationComponent} from "./component/all-location/all-location.component";
import {DriverTableComponent} from "./component/driver-table/driver-table.component";
import {CarComponent} from "./component/car/car.component";

import {BlogComponent} from "./component/blog/blog.component";


const routes: Routes = [
  {path:'', component:IndexComponent},
  { path: 'unauthorized', component: UnauthorizedComponent },
  {path : 'cars', component : CarsComponent},
  {path: 'addCars', component: AddCarsComponent , canActivate : [authGuard], data : {roles : ['agence']}},
  {path : 'listAgence', component : ListeAgenceComponent},
  {path: 'faq' , component: FaqComponent},
  {path:'agence' , component: PricingComponent },
  {path:'account',component:AccountComponent,children :[
      {path: 'locationtable', component: AllLocationComponent  , canActivate : [authGuard], data : {roles : ['agence']}},
    ]},
  {path:'service' , component:ArticleComponent},
  {path: 'car/:id' ,component:CarComponent},



  {path:'article', component:BlogComponent},
  {path: 'admin', component: AdminComponent , canActivate : [authGuard], data : {roles : ['admin']}, children :[
      {path: 'agenceTable', component: AgenceTableComponent},
      {path: 'clientTable', component: ClientTableComponent},
      {path: 'carsTable', component: AllCarsComponent},
      {path: 'locationtable', component: AllLocationComponent},
      {path: 'driverTable', component: DriverTableComponent},
      {path :'dash', component:DashboardComponent, canActivate : [authGuard], data : {roles : ['admin']}},

    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
