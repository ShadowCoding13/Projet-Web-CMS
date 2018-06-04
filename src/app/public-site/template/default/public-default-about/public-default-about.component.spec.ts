import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDefaultAboutComponent } from './public-default-about.component';

describe('PublicDefaultAboutComponent', () => {
  let component: PublicDefaultAboutComponent;
  let fixture: ComponentFixture<PublicDefaultAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicDefaultAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDefaultAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
