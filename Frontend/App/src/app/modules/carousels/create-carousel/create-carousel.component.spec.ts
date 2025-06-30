import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarouselComponent } from './create-carousel.component';

describe('CreateCarouselComponent', () => {
  let component: CreateCarouselComponent;
  let fixture: ComponentFixture<CreateCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCarouselComponent]
    });
    fixture = TestBed.createComponent(CreateCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
