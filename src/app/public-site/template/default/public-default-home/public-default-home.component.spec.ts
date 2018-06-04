import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDefaultHomeComponent } from './public-default-home.component';

describe('PublicDefaultHomeComponent', () => {
  let component: PublicDefaultHomeComponent;
  let fixture: ComponentFixture<PublicDefaultHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicDefaultHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDefaultHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
