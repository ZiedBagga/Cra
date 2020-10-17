import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCraComponent } from './add-cra.component';

describe('AddCraComponent', () => {
  let component: AddCraComponent;
  let fixture: ComponentFixture<AddCraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
