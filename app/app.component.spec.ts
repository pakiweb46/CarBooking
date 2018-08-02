
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {CarsComponent} from './cars/cars.component';
import {BookingsComponent} from './bookings/bookings.component';
import {CarsListComponent} from './cars/cars-list/cars-list.component';
import {HeaderComponent} from './header/header/header.component';
import {BookingDetailComponent} from './bookings/booking-detail/booking-detail.component';
import {CarItemComponent} from './cars/cars-list/car-item/car-item.component';
import {BookingListComponent} from './bookings/booking-list/booking-list.component';
import {CarDetailComponent} from './cars/car-detail/car-detail.component';
import {APP_BASE_HREF, registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);

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
]

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        CarsListComponent,
        CarsComponent,
        CarItemComponent,
        BookingsComponent,
        BookingListComponent,
        BookingDetailComponent,
        CarDetailComponent
      ],
      imports: [
        BrowserModule, FormsModule, HttpClientModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes)
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'CarBooking'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('CarBooking');
  }));
  it('should render title in a titel tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('title').textContent).toContain('Car Booking');
  }));
});
