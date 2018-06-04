import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDefaultBlogComponent } from './public-default-blog.component';

describe('PublicDefaultBlogComponent', () => {
  let component: PublicDefaultBlogComponent;
  let fixture: ComponentFixture<PublicDefaultBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicDefaultBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDefaultBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
