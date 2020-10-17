import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCraComponent } from './show-cra.component';

describe('ShowCraComponent', () => {
  let component: ShowCraComponent;
  let fixture: ComponentFixture<ShowCraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
