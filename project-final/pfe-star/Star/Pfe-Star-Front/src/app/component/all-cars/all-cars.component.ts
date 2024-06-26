import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../service/cars.service';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrl: './all-cars.component.css'
})
export class AllCarsComponent implements OnInit{
  constructor(public shar : CarsService) {
  }
  cars :any =[]
  ngOnInit(): void {
    this.shar.getAllVehicules().subscribe(
      res => {
        this.cars = res;
        console.log(this.cars)
      },
      err=>{
        console.log(err)
      }
    );
  }
  delete(id:any){
    this.shar.deleteVehicule(id).subscribe(
      res=>{
        window.location.reload();
      },
      err=>{
        console.log(err)
      }
    );
  }

}
