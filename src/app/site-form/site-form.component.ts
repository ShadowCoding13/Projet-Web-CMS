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
      address: ['', Validators.required],
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
      [
        'Accueil',
        'A propos',
        'Blog',
        'Contact'
      ], 
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
          address: this.siteForm.get('address').value,
        }
      },
      {
        lastUpdate: new Date(),
        articles: [
          {
            title: "Création de mon site",
            content: "Nous pouvons innauguré aujourd'hui la création de mon site",
            categorie: "Start",
            illustration: "https://images.unsplash.com/photo-1494249465471-5655b7878482?ixlib=rb-0.3.5&s=997116405ede44d63ddc54f16e2db8ce&w=1000&q=80",
          }
        ]
      }
    );
    this.sitesService.createNewSite(newSite);
    this.router.navigate(['/sites']);
  }
}
