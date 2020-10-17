import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraCalendarComponent } from './cra-calendar.component';

describe('CraCalendarComponent', () => {
  let component: CraCalendarComponent;
  let fixture: ComponentFixture<CraCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
