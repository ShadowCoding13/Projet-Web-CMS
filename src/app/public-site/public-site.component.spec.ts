import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSiteComponent } from './public-site.component';

describe('PublicSiteComponent', () => {
  let component: PublicSiteComponent;
  let fixture: ComponentFixture<PublicSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
