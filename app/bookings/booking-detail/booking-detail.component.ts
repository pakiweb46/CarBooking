import { Component, OnInit} from '@angular/core';
import {BookingModel} from '../BookingModel';
import {BookingService} from '../Booking.Service';
import {ActivatedRoute, Params} from '@angular/router';
import {CarsDetailModel} from '../../cars/cars-detail.model';
import {CarsService} from '../../cars/cars.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit {
  bookingDetailModel: BookingModel;
  carData: CarsDetailModel;
  constructor(private bookService: BookingService,
              private route: ActivatedRoute,
              private carService: CarsService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.bookService.GetBookingbyBookID(params['id']).subscribe(
          (bookingDetailsModel: BookingModel) => {
            this.bookingDetailModel = bookingDetailsModel;
            this.carService.getCarDetail(bookingDetailsModel.carId).subscribe(
              (response) => {
                this.carData = response;
              }
            );
          }
        );
      }
    );
  }
}
