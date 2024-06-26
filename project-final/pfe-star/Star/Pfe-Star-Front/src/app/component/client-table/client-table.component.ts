import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrl: './client-table.component.css'
})
export class ClientTableComponent implements OnInit {
  constructor(public shar : UserService){
  }
  users:any=[];
  ngOnInit(): void {
    this.shar.getAllUser().subscribe(
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
