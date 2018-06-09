import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import { SitesService } from '../services/sites.service';
import { Site } from '../models/site.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.scss']
})
export class SitesListComponent implements OnInit, OnDestroy {

  title: string = "Mes Sites";
  subtitle: string = "Liste des tous vos sites, sélectionnez en un !";

  siteToDelete: Site;

  sites: Site[];
  sitesSubscription: Subscription;

  constructor(private sitesService: SitesService, private router: Router) {}

  ngOnInit() {
    this.sitesSubscription = this.sitesService.sitesSubject.subscribe(
      (sites: Site[]) => {
        this.sites = sites;
      }
    );
    this.sitesService.getSites();
    this.sitesService.emitSites();
  }

  onNewSite() {
    this.router.navigate(['/sites', 'new']);
  }

  onDeleteSite() {
    this.sitesService.removeSite(this.siteToDelete);
  }

  onViewSite(id: number) {
    this.router.navigate(['/sites', 'view', id]);
  }

  onOrderByTitle(){
    this.sitesService.getSitesOrderByTitle();
    this.sitesService.emitSites();
  }

  onOrderByAuthor(){
    this.sitesService.getSitesOrderByAuthor();
    this.sitesService.emitSites();
  }

  ngOnDestroy() {
    this.sitesSubscription.unsubscribe();
  }
}
