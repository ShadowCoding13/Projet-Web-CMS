import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';

@Component({
  selector: 'app-public-default-home',
  templateUrl: './public-default-home.component.html',
  styleUrls: ['./public-default-home.component.scss']
})
export class PublicDefaultHomeComponent implements OnInit {

  @Input() site: Site;

  constructor() { }

  ngOnInit() {
  }

}
