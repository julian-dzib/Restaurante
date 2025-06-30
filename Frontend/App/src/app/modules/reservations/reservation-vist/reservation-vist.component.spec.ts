import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationVistComponent } from './reservation-vist.component';

describe('ReservationVistComponent', () => {
  let component: ReservationVistComponent;
  let fixture: ComponentFixture<ReservationVistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationVistComponent]
    });
    fixture = TestBed.createComponent(ReservationVistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
