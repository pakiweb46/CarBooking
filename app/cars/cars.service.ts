
import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {CarsListModel} from './car-list.model';
import {map} from 'rxjs/operators';
import {CarsDetailModel} from './cars-detail.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CarsService {
  apiUrl = 'http://job-applicants-dummy-api.kupferwerk.net.s3.amazonaws.com/api/cars.json';
  apiDetailUrl = 'http://job-applicants-dummy-api.kupferwerk.net.s3.amazonaws.com/api/cars/';
  /*apiUrl = 'assets/cars.json'; // local api call to prevent the CORs failure*/
   private carList: CarsListModel[] = [];
//   carSelected = new EventEmitter<number>();
    carSelectSubject = new Subject();
  constructor(private http: HttpClient ) {}
  loadCars() {
    return this.http.get<CarsListModel[]>(this.apiUrl)
      .pipe( map(
        (cars) => {
          return cars;
        }
      ));
     }
     getCarDetail(id) {
       return this.http.get<CarsDetailModel>(this.apiDetailUrl + id + '.json')
         .pipe( map(
           (car) => {
             return car;
           }
         ));
     }
}
