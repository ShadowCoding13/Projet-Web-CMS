import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Site } from '../models/site.model';
import { SitesService } from '../services/sites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.scss']
})
export class SiteFormComponent implements OnInit {

  title: string = "Créer un site";
  subtitle: string = "Aujourd'hui il n'y a rien de plus facile !"

  siteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private sitesService: SitesService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.siteForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['']
    });
  }
  
  onSaveSite() {
    const title = this.siteForm.get('title').value;
    const author = this.siteForm.get('author').value;
    const description = this.siteForm.get('description').value;
    const newSite = new Site(title, author, description);
    this.sitesService.createNewSite(newSite);
    this.router.navigate(['/sites']);
  }
}
