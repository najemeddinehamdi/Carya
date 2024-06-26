import { Component,OnInit } from '@angular/core';
import { LocationService } from '../../service/location.service';

@Component({
  selector: 'app-all-location',
  templateUrl: './all-location.component.html',
  styleUrl: './all-location.component.css'
})
export class AllLocationComponent implements OnInit {
  constructor(public shar :LocationService){
  }
  locations:any=[];
  ngOnInit(): void {
    this.shar.getAllLocatin().subscribe(
      res=>{
        this.locations=res;
        console.log(this.locations)
      },
      err=>{
        console.log(err)
      }
    );
  }

}
