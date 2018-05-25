import { Component, OnInit } from '@angular/core';
import { Site } from '../models/site.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SitesService } from '../services/sites.service';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UploadService } from '../services/upload.service';
import { Upload } from '../models/upload.model';

@Component({
  selector: 'app-single-site',
  templateUrl: './single-site.component.html',
  styleUrls: ['./single-site.component.scss']
})
export class SingleSiteComponent implements OnInit {

  title: string;
  subtitle: string = "Edition de mon site";

  site: Site;
  url;

  constructor(private route: ActivatedRoute, 
              private sitesService: SitesService,
              private uploadService: UploadService,
              private router: Router,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.site = new Site(null, null, null, null, null, null, null, null);
    const id = this.route.snapshot.params['id'];
    this.sitesService.getSingleSite(+id).then(
      (site: Site) => {
        this.site = site;
        this.title = site.title
      }
    );
    this.url = this.router.url;
  }

  onBack() {
    this.router.navigate(['/sites']);
  }

  onDeleteSite(site: Site) {
    this.sitesService.removeSite(site);
  }
    
}