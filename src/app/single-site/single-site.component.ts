import { Component, OnInit } from '@angular/core';
import { Site } from '../models/site.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SitesService } from '../services/sites.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-single-site',
  templateUrl: './single-site.component.html',
  styleUrls: ['./single-site.component.scss']
})
export class SingleSiteComponent implements OnInit {

  title: string;
  subtitle: string = "Edition de mon site";

  site: Site;
  siteSubscription: Subscription;
  url;

  constructor(private route: ActivatedRoute, private sitesService: SitesService,
              private router: Router) {}

  ngOnInit() {
    this.site = new Site(null, null, null, null, null, null, null);
    const id = this.route.snapshot.params['id'];
    this.sitesService.getSingleSite(+id).then(
      (site: Site) => {
        this.site = site;
        this.title = site.title
      }
    );
    this.url = this.router.url
  }

  onBack() {
    this.router.navigate(['/sites']);
  }
    
}