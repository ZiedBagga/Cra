import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraHomeComponent } from './cra-home.component';

describe('CraHomeComponent', () => {
  let component: CraHomeComponent;
  let fixture: ComponentFixture<CraHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
