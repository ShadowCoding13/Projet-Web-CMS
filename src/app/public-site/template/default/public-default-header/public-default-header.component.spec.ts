import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDefaultHeaderComponent } from './public-default-header.component';

describe('PublicDefaultHeaderComponent', () => {
  let component: PublicDefaultHeaderComponent;
  let fixture: ComponentFixture<PublicDefaultHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicDefaultHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDefaultHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
