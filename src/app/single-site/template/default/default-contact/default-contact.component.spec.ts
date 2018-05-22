import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultContactComponent } from './default-contact.component';

describe('DefaultContactComponent', () => {
  let component: DefaultContactComponent;
  let fixture: ComponentFixture<DefaultContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
