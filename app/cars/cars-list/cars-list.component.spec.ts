import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListComponent } from './cars-list.component';
import {CarsService} from '../cars.service';

describe('CarsListComponent', () => {
  let component: CarsListComponent;
  let fixture: ComponentFixture<CarsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it( 'should use the service to intialize cars ', async(() => {
    let fixture = TestBed.createComponent(CarsListComponent);
    let app = fixture.debugElement.componentInstance;
    let carsService = fixture.debugElement.injector.get(CarsService);
    let spy = spyOn(carsService,'getCarDetail')
      .and.returnValue(Promise);
    fixture.detectChanges();
    expect(app.cars).toBe(!undefined);
  }));
});
