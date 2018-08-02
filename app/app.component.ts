import { Component } from '@angular/core';
import { Response } from '@angular/http';
import {CarsService} from './cars/cars.service';
import {BookingService} from './bookings/Booking.Service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CarsService, BookingService]
})
export class AppComponent {
  title = 'CarBooking';

}
