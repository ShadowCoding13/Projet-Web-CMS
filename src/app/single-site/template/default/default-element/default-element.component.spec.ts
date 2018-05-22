import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultElementComponent } from './default-element.component';

describe('DefaultElementComponent', () => {
  let component: DefaultElementComponent;
  let fixture: ComponentFixture<DefaultElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
