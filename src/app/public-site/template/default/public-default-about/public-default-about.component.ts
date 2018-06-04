import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';

@Component({
  selector: 'app-public-default-about',
  templateUrl: './public-default-about.component.html',
  styleUrls: ['./public-default-about.component.scss']
})
export class PublicDefaultAboutComponent implements OnInit {

  @Input() site: Site;

  constructor() { }

  ngOnInit() {
  }

}
