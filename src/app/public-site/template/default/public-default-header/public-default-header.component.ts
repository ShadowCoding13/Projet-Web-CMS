import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';

@Component({
  selector: 'app-public-default-header',
  templateUrl: './public-default-header.component.html',
  styleUrls: ['./public-default-header.component.scss']
})
export class PublicDefaultHeaderComponent implements OnInit {

  @Input() site: Site;
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
