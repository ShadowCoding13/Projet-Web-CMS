import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';

@Component({
  selector: 'app-default-about',
  templateUrl: './default-about.component.html',
  styleUrls: ['./default-about.component.scss']
})
export class DefaultAboutComponent implements OnInit {

  @Input() site: Site

  constructor() { }

  ngOnInit() {
  }

}
