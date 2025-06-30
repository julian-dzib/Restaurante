import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAboutComponent } from './update-about.component';

describe('UpdateAboutComponent', () => {
  let component: UpdateAboutComponent;
  let fixture: ComponentFixture<UpdateAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAboutComponent]
    });
    fixture = TestBed.createComponent(UpdateAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
