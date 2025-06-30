import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggesComponent } from './sugges.component';

describe('SuggesComponent', () => {
  let component: SuggesComponent;
  let fixture: ComponentFixture<SuggesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggesComponent]
    });
    fixture = TestBed.createComponent(SuggesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
