import { Component, OnInit } from '@angular/core';
import { Site } from '../models/site.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SitesService } from '../services/sites.service';
import { UploadService } from '../services/upload.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-single-site',
  templateUrl: './single-site.component.html',
  styleUrls: ['./single-site.component.scss']
})
export class SingleSiteComponent implements OnInit {

  title: string;
  subtitle = 'Edition de mon site';

  site: Site;
  url;
  id;

  constructor(private route: ActivatedRoute,
              private sitesService: SitesService,
              private uploadService: UploadService,
              private router: Router,
              private authService: AuthService) {}

  ngOnInit() {
    this.site = new Site(null, null, null, null, null, null, null, null);
    this.id = this.route.snapshot.params['id'];
    this.sitesService.getSingleSite(+this.id).then(
      (site: Site) => {
        this.site = site;
        this.title = site.title;
      }
    );
    this.url = this.router.url;
    this.authService.getUser();
  }

  onViewPublic() {
    this.router.navigate(['/public/' + this.authService.user.uid + '/' + this.id]);
  }

}
