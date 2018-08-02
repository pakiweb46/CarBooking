import { Component, OnInit } from '@angular/core';
import {CarsDetailModel} from '../../cars-detail.model';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent implements OnInit {

  constructor() { }
  cars: CarsDetailModel[];
  ngOnInit() {
  }

}
