import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingListComponent } from './booking-list.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {FormsModule} from '@angular/forms';
import {CarsComponent} from '../../cars/cars.component';
import {BookingsComponent} from '../bookings.component';
import {CarsListComponent} from '../../cars/cars-list/cars-list.component';
import {BookingDetailComponent} from '../booking-detail/booking-detail.component';
import {CarDetailComponent} from '../../cars/car-detail/car-detail.component';
import {AppComponent} from '../../app.component';
import {HeaderComponent} from '../../header/header/header.component';
import {CarItemComponent} from '../../cars/cars-list/car-item/car-item.component';

describe('BookingListComponent', () => {
  let component: BookingListComponent;
  let fixture: ComponentFixture<BookingListComponent>;
  const appRoutes: Routes = [
    { path: '', redirectTo: '/Cars' , pathMatch: 'full' },
    { path: 'Cars', component: CarsComponent, children: [
        {path: '', component: CarsListComponent},
        {path: ':id', component: CarDetailComponent}
      ]},
    { path: 'Book', component: BookingsComponent},
    { path: 'Book/:id', component: BookingsComponent},
    { path: 'Bookings', component: BookingListComponent},
    { path: 'Booking-Detail/:id', component: BookingDetailComponent},
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingListComponent,
        HeaderComponent,
        CarsListComponent,
        CarsComponent,
        CarItemComponent,
        BookingsComponent,
        BookingListComponent,
        BookingDetailComponent,
        CarDetailComponent],
      imports: [
        BrowserModule, FormsModule, HttpClientModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
