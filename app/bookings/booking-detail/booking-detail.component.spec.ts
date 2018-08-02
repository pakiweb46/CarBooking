import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BookingModel} from '../BookingModel';
import { BookingDetailComponent } from './booking-detail.component';
import {BookingService} from '../Booking.Service';
import {CarsService} from '../../cars/cars.service';
import {ActivatedRoute} from '@angular/router';

describe('BookingDetailComponent', () => {
  let component: BookingDetailComponent;
  let fixture: ComponentFixture<BookingDetailComponent>;
  const fakeActivatedRoute = {
    snapshot: {
      data: {'id': '1'}
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingDetailComponent ],
      providers: [BookingService, CarsService, {ActivatedRoute, useValue: fakeActivatedRoute}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
