import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BookingModel } from '../bookings/BookingModel';
import {map} from 'rxjs/operators';


@Injectable()
export class BookingService {
  private actionUrl: string;
  private actionGetUrl: string;
  private actionPutUrl: string;
  private token = '';
  private username = 'guest';
  private data: any;
  bookingList: BookingModel[] = [];
  constructor(private _Route: Router, private _http: HttpClient) {
    this.actionGetUrl = 'http://localhost:56483/api/Booking';  /*//Json  Fake Server*/
  }

  public Book(bookingModel: BookingModel) {
    console.log(bookingModel);
    /*//Json  Fake Server*/
    return this._http.post('http://localhost:56483/api/Booking', bookingModel)
      .map((res: Response) => res.json())
      .catch(response => {
        if (response.status === 401) {
          alert('Connection Failure');
          this._Route.navigate(['Cars']);
        }
        return response;
      });
  }

  public GetAllBookingDetails = (): Observable<any> => {
    const getUrl = 'assets/bookings/dBookingList.json';
    return this._http.get<BookingModel[]>(getUrl)
      .pipe(
        map(
          (response) => {
            return response;
      }));
  }
  /*<any>response.json()).catch(response => {if (response.status === 401) {alert('Connection Failure');this._Route.navigate(['Cars']);*/

  public GetBookingbyBookID(BookingID: string) {
   /* this.actionGetUrl = 'http://localhost:56483/api/Booking/' + BookingID+ '.json';*/
    const getUrl = 'assets/bookings/Book/' + BookingID + '.json';
    console.log(getUrl);
    return this._http.get(getUrl)
      .pipe(
        map(
          (response) => {
            return response;
          }));
  }

}
