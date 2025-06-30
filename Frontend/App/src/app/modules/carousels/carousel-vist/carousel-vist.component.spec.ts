import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselVistComponent } from './carousel-vist.component';

describe('CarouselVistComponent', () => {
  let component: CarouselVistComponent;
  let fixture: ComponentFixture<CarouselVistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselVistComponent]
    });
    fixture = TestBed.createComponent(CarouselVistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
