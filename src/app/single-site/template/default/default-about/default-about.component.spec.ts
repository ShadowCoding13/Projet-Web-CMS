import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAboutComponent } from './default-about.component';

describe('DefaultAboutComponent', () => {
  let component: DefaultAboutComponent;
  let fixture: ComponentFixture<DefaultAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
