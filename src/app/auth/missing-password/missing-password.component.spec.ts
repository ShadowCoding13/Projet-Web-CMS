import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPasswordComponent } from './missing-password.component';

describe('MissingPasswordComponent', () => {
  let component: MissingPasswordComponent;
  let fixture: ComponentFixture<MissingPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
