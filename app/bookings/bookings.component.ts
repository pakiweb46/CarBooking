import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CarsDetailModel} from '../cars/cars-detail.model';
import {BookingModel} from './BookingModel';
import {CarsService} from '../cars/cars.service';
import {BookingService} from './Booking.Service';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  @ViewChild('f') bookingForm: NgForm;
  carToBook: string;
  carData: CarsDetailModel;
  bookingModel: BookingModel = new BookingModel();
  private data: any;
  private responsedata: any;
  startDateTime: Date;
  endDateTime: Date;
  minDate: Date;
  maxDate: Date;
  minEndDate: Date;
  username = 'guest'; /* no user Management so assuming guest user*/
  constructor(private route: ActivatedRoute, private carsService: CarsService ,
              private _bookingservice: BookingService,
              private _Route: Router,
              ) {}

  ngOnInit() {
    this.carToBook = this.route.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.carToBook = params['id'];
        this.carsService.getCarDetail(params['id']).subscribe(
          (carDetail: CarsDetailModel) => {
            this.carData = carDetail;
            const tommarow =  new Date();
            const today = new Date();
            tommarow.setDate(today.getDate() + 1);
            tommarow.setHours(9, 0, 0, 0);
            this.startDateTime = tommarow;
            this.endDateTime = new Date( );
            this.endDateTime.setDate(tommarow.getDate() + 1);
            this.endDateTime.setHours(9 , 0 , 0 , 0 );
                        this.minDate = today;
                        this.bookingModel.carId = this.carToBook;
                        this.bookingModel.carName = this.carData.name;
                        this.bookingModel.fromDateTime = this.startDateTime.getDate().toString();
                        this.bookingModel.toDateTime = this.endDateTime.getDate().toString();
          }
        );
      }
    );
  }
  dateChanged( ) {
    /*set the max value to new*/
    const dd = new Date(this.bookingForm.value.startDateTime);
    const gl = new Date();
    const nl = new Date();
    nl.setDate(dd.getDate() + 7);
    gl.setDate(dd.getDate() + 1);
    this.maxDate = nl;
    this.minEndDate = gl;
    console.log(dd);
    console.log(gl);
  }
  onSubmit() {
    console.log('frm submited');
    let formdata: BookingModel;
    formdata = this.bookingModel;
    formdata.bookingId = 0;
    formdata.fName = this.bookingModel.fName;
    formdata.lName = this.bookingModel.lName;
    formdata.fromDateTime = this.bookingModel.fromDateTime.toString();
    formdata.toDateTime = this.bookingModel.toDateTime.toString();
    formdata.address = this.bookingModel.address;
    formdata.emailId = this.bookingModel.emailId;
    formdata.contactNo = this.bookingModel.contactNo;
    formdata.carId = this.bookingModel.carId;
    formdata.username = this.username;
    this._bookingservice.Book(formdata).subscribe
    (
      data => {
        this.responsedata = data;

        if (this.responsedata === 'Invalid') {
          alert('Session Expired');
        } else if (this.responsedata.data === 'AlreadyBooked') {
          alert('Car Slot is Already Booked');
        } else if (this.responsedata.data === 'InvalidTime') {
          alert('Choose Valid Dates');
        } else if (this.responsedata.data === 'Invalidbooktime') {
          alert('Choose Valid Dates');
        } else {
          alert('Booking Done Successfully ');
          this._Route.navigate(['Cars']);
          this.bookingForm.reset();
        }
      },
      error => {
        if (error) {
          alert('An Error has occured please try again after some time !');
        }
      });
  }


}
