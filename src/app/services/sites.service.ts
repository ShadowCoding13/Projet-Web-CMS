import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Site } from '../models/site.model';
import * as firebase from 'firebase';

@Injectable()
export class SitesService {

  public isPublic = false;

  views = [];
  viewsSubject = new Subject();

  sites: Site[] = [];
  sitesSubject = new Subject<Site[]>();

  emitSites() {
    this.sitesSubject.next(this.sites);
  }

  emitViews() {
    this.viewsSubject.next(this.views);
  }

  saveSites() {
    firebase.database().ref(`sites/${firebase.auth().currentUser.uid}`).set(this.sites);
  }

  savePublicSites(auteur: string) {
    firebase.database().ref(`sites/${auteur}`).set(this.sites);
  }

  saveViews() {
    firebase.database().ref(`views`).set(this.views);
  }

  getSites() {
    firebase.database().ref(`sites/${firebase.auth().currentUser.uid}`)
      .on('value', (data : firebase.database.DataSnapshot) => {
          this.sites = data.val() ? data.val() : [];
          this.emitSites();
        }
      );
  }

  getPublicSites() {
    firebase.database().ref(`views`)
      .on('value', (data : firebase.database.DataSnapshot) => {
          this.views = data.val() ? data.val() : [];
          this.emitViews();
        }
      );
  }

  getSitesOrderByTitle() {
    firebase.database().ref(`sites/${firebase.auth().currentUser.uid}`).orderByChild('title')
      .on('value', (data : firebase.database.DataSnapshot) => {
          this.sites = data.val() ? data.val() : [];
          this.emitSites();
        }
      );
  }

  getSitesOrderByAuthor() {
    firebase.database().ref(`sites/${firebase.auth().currentUser.uid}`).orderByChild('author')
      .on('value', (data : firebase.database.DataSnapshot) => {
          this.sites = data.val() ? data.val() : [];
          this.emitSites();
        }
      );
  }

  getSitesOrderByQuery(query: string) {
    firebase.database().ref(`sites/${firebase.auth().currentUser.uid}`).startAt(query)
      .on('value', (data : firebase.database.DataSnapshot) => {
          this.sites = data.val() ? data.val() : [];
          this.emitSites();
        }
      );
  }

  getSingleSite(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref(`sites/${firebase.auth().currentUser.uid}/` + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getPublicSite(reference: string){
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref(`sites/${reference}`).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewSite(site: Site) {
    this.sites.push(site);
    const siteIndex = this.sites.findIndex(
      (siteEl) => {
        if(siteEl === site) {
          return true;
        }
      }
    );
    const view = {
      title: site.title,
      author: site.author,
      lien: 'public/' + firebase.auth().currentUser.uid + '/' + siteIndex
    };
    this.views.push(view);
    this.saveSites();
    this.emitSites();
    this.saveViews();
    this.emitViews();
  }

  updateSite(site: Site){
    const siteIndexToRemove = this.sites.findIndex(
      (siteEl) => {
        if(siteEl === site) {
          return true;
        }
      }
    );
    this.sites.splice(siteIndexToRemove, 1);
    this.sites.push(site);
    this.saveSites();
    this.emitSites();
  }

  updatePublicSite(site: Site, auteur: string){
    const siteIndexToRemove = this.sites.findIndex(
      (siteEl) => {
        if(siteEl === site) {
          return true;
        }
      }
    );
    this.sites.splice(siteIndexToRemove, 1);
    this.sites.push(site);
    this.savePublicSites(auteur);
    this.emitSites();
  }

  removeSite(site: Site) {
    const siteIndexToRemove = this.sites.findIndex(
      (siteEl) => {
        if (siteEl === site) {
          return true;
        }
      }
    );
    this.sites.splice(siteIndexToRemove, 1);
    this.saveSites();
    this.emitSites();
  }
}
