import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontreAnalogComponent } from './montre-analog.component';

describe('MontreAnalogComponent', () => {
  let component: MontreAnalogComponent;
  let fixture: ComponentFixture<MontreAnalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontreAnalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontreAnalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
