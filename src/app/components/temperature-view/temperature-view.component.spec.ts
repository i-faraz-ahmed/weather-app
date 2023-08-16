import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureViewComponent } from './temperature-view.component';

describe('TemperatureViewComponent', () => {
  let component: TemperatureViewComponent;
  let fixture: ComponentFixture<TemperatureViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureViewComponent]
    });
    fixture = TestBed.createComponent(TemperatureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
