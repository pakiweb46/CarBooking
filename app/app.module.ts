import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsComponent } from './cars/cars.component';
import { CarItemComponent } from './cars/cars-list/car-item/car-item.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingListComponent } from './bookings/booking-list/booking-list.component';
import { BookingDetailComponent } from './bookings/booking-detail/booking-detail.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);
import {APP_BASE_HREF} from '@angular/common';

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
@NgModule({
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
  bootstrap: [AppComponent]
})
export class AppModule {


}
