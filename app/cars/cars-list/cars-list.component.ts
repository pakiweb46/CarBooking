import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {CarsListModel} from '../car-list.model';
import {CarsService} from '../cars.service';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
   cars: CarsListModel[];
   /*@Output() carSelected = new EventEmitter<number>();*/
  constructor(private carsService: CarsService) { }
  ngOnInit() {
   this.carsService.loadCars().subscribe(
     (cars) => {
       this.cars = cars.slice().sort((a, b) => a['name'].toLowerCase() < b['name'].toLowerCase() ? -1
         : a['name'].toLowerCase() > b['name'].toLowerCase() ? 1 : 0 );
       /*this.cars = cars.slice().sort((a, b) => a['name'] < b['name'] ? -1 : a['name'] > b['name'] ? 1 : 0 );*/
     }
   );
  }
  onDetailClick(id: number) {
    /*this.carSelected.emit(id);*/
    this.carsService.carSelectSubject.next(id);
  /*  console.log(id + ' was clicked');*/
  }
}
