import { Component, OnInit } from '@angular/core';
import {CarsListModel} from '../../cars/car-list.model';
import {BookingModel} from '../BookingModel';
import {BookingService} from '../Booking.Service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  bookings: BookingModel[];
  constructor(private bookService: BookingService) { }
  ngOnInit() {
    this.bookService.GetAllBookingDetails().subscribe(
      (bookings) => {
        this.bookings = bookings;
        console.log(bookings);
      }
    );
  }

}
