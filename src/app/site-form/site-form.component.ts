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
      description: ['', Validators.required],
      tel: ['', Validators.required],
      mail: ['', Validators.required, Validators.email],
      city: ['', Validators.required],
      firstLign: ['', Validators.required],
      secondLign: ['', Validators.required]
    });
  }
  
  onSaveSite() {
    const title = this.siteForm.get('title').value;
    const author = this.siteForm.get('author').value;
    const description = this.siteForm.get('description').value;
    const newSite = new Site(
      title, 
      author, 
      description, 
      null, 
      null,
      {
        illustration: null,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        logo: null,
        photoAuthor: null,
        storyAuthor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tel: this.siteForm.get('tel').value,
        mail: this.siteForm.get('mail').value,
        address: {
          city: this.siteForm.get('city').value,
          firstLign: this.siteForm.get('firstLign').value,
          secondLign: this.siteForm.get('secondLign').value
        }
      }
    );
    this.sitesService.createNewSite(newSite);
    this.router.navigate(['/sites']);
  }
}
