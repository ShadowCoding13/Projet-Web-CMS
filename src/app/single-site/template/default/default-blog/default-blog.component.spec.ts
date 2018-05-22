import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultBlogComponent } from './default-blog.component';

describe('DefaultBlogComponent', () => {
  let component: DefaultBlogComponent;
  let fixture: ComponentFixture<DefaultBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
