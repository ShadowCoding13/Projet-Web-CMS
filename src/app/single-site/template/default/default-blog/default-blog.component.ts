import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';

@Component({
  selector: 'app-default-blog',
  templateUrl: './default-blog.component.html',
  styleUrls: ['./default-blog.component.scss']
})
export class DefaultBlogComponent implements OnInit {

  @Input() site: Site

  constructor() { }

  ngOnInit() {
    console.log(this.site.blog)
  }

}
