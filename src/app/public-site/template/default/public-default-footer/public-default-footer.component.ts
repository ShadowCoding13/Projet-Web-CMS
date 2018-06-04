import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';

@Component({
  selector: 'app-public-default-footer',
  templateUrl: './public-default-footer.component.html',
  styleUrls: ['./public-default-footer.component.scss']
})
export class PublicDefaultFooterComponent implements OnInit {

  @Input() site: Site;
  @Input() url;

  constructor() { }

  ngOnInit() {
  }

  getUrl(site){
    return site.toLowerCase().replace(/ /g, '-');
  }

}
