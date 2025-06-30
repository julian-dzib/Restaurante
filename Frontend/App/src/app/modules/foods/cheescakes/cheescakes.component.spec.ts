import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheescakesComponent } from './cheescakes.component';

describe('CheescakesComponent', () => {
  let component: CheescakesComponent;
  let fixture: ComponentFixture<CheescakesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheescakesComponent]
    });
    fixture = TestBed.createComponent(CheescakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
