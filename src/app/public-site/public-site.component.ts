import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Site } from '../models/site.model';
import { SitesService } from '../services/sites.service';

@Component({
  selector: 'app-public-site',
  templateUrl: './public-site.component.html',
  styleUrls: ['./public-site.component.scss']
})
export class PublicSiteComponent implements OnInit {

  public site: Site;

  constructor(private route: ActivatedRoute, private sitesService: SitesService,
              private router: Router) {}

  ngOnInit() {
    this.site = new Site(null, null, null, null, null, null, null);
    const site = this.route.snapshot.params['author'] + '/' + this.route.snapshot.params['site'];
    this.sitesService.getPublicSite(site).then(
      (site: Site) => {
        this.site = site;
      }
    );
  }

  getUrl(site){
    return site.toLowerCase().replace(/ /g, '-');
  }

}
