
import { Component, OnInit } from '@angular/core';
import { AgenceService } from '../../service/agence.service';
import {UserService} from "../../service/user.service";
@Component({
  selector: 'app-agence-table',
  templateUrl: './agence-table.component.html',
  styleUrl: './agence-table.component.css'
})
export class AgenceTableComponent implements OnInit {
  constructor(public shar : UserService) {
  }
  agences:any=[];
  ngOnInit(): void {
    this.shar.getUsersRoles('agence').subscribe(
      res => {
        this.agences = res;
        console.log(this.agences)
      },
      err=>{
        console.log(err)
      }
    );

  }
}
