import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDefaultContactComponent } from './public-default-contact.component';

describe('PublicDefaultContactComponent', () => {
  let component: PublicDefaultContactComponent;
  let fixture: ComponentFixture<PublicDefaultContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicDefaultContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDefaultContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
