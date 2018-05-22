import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';

@Component({
  selector: 'app-default-contact',
  templateUrl: './default-contact.component.html',
  styleUrls: ['./default-contact.component.scss']
})
export class DefaultContactComponent implements OnInit {

  @Input() site: Site

  constructor() { }

  ngOnInit() {
  }

}
