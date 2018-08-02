import {Component, OnInit, Input, AfterViewChecked} from '@angular/core';
import {CarsService} from '../cars.service';
import {CarsDetailModel} from '../cars-detail.model';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit  {

  carDetailModel: CarsDetailModel;
  constructor( private carsService: CarsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.carsService.getCarDetail(params['id']).subscribe(
          (carDetail: CarsDetailModel) => {
            this.carDetailModel = carDetail;
          }
        );
      }
    );
  }

}
