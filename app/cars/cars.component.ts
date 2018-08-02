import { Component, OnInit } from '@angular/core';
import {CarsService} from './cars.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {

  constructor(private carsService: CarsService) { }
   selectedCarId: number;
  ngOnInit() {

  }
  onLogCars() {
    this.carsService.loadCars()
      .subscribe(
        (cars) => {
          console.log(cars);
        }
      );
  }
}
