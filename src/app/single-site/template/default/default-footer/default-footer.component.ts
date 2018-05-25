import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';

@Component({
  selector: 'app-default-footer',
  templateUrl: './default-footer.component.html',
  styleUrls: ['./default-footer.component.scss']
})
export class DefaultFooterComponent implements OnInit {

  @Input() site: Site;

  constructor() { }

  ngOnInit() {
  }

  getUrl(title: string){
    return title.toLowerCase().replace(/ /g, '-');
  }

}
