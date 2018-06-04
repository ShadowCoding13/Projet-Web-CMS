import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';

@Component({
  selector: 'app-public-default-blog',
  templateUrl: './public-default-blog.component.html',
  styleUrls: ['./public-default-blog.component.scss']
})
export class PublicDefaultBlogComponent implements OnInit {

  @Input() site: Site;

  constructor() { }

  ngOnInit() {
  }

}
