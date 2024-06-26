import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import {SharService} from "../../shar.service";

@Component({
  selector: 'app-driver-table',
  templateUrl: './driver-table.component.html',
  styleUrl: './driver-table.component.css'
})
export class DriverTableComponent {
  constructor(public shar : UserService ){
  }
  users:any=[];
  ngOnInit(): void {
    this.shar.getUsersRoles('chauffeur').subscribe(
      res =>{
        this.users=res;
        console.log(this.users)
      },
      err=>{
        console.log(err)
      }
    );
  }

  delete(id:any){
    this.shar.deleteuser(id).subscribe(
      res=>{
        window.location.reload();
      },
      err=>{
        console.log(err)
      }
    );
  }
}
