import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuffinsComponent } from './muffins.component';

describe('MuffinsComponent', () => {
  let component: MuffinsComponent;
  let fixture: ComponentFixture<MuffinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuffinsComponent]
    });
    fixture = TestBed.createComponent(MuffinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
