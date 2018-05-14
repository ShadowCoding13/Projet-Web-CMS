import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Site } from '../models/site.model';
import * as firebase from 'firebase';

@Injectable()
export class SitesService {

  sites: Site[] = [];
  sitesSubject = new Subject<Site[]>();

  emitSites() {
    this.sitesSubject.next(this.sites);
  }

  saveSites() {
    firebase.database().ref(`users/${firebase.auth().currentUser.uid}/sites`).set(this.sites);
  }

  getSites() {
    firebase.database().ref(`users/${firebase.auth().currentUser.uid}/sites`)
      .on('value', (data : firebase.database.DataSnapshot) => {
          this.sites = data.val() ? data.val() : [];
          this.emitSites();
        }
      );
  }

  getSingleSite(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref(`users/${firebase.auth().currentUser.uid}/sites/` + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewSite(newSite: Site) {
    this.sites.push(newSite);
    this.saveSites();
    this.emitSites();
  }

  removeSite(site: Site) {
    const siteIndexToRemove = this.sites.findIndex(
      (siteEl) => {
        if(siteEl === site) {
          return true;
        }
      }
    );
    this.sites.splice(siteIndexToRemove, 1);
    this.saveSites();
    this.emitSites();
  }
}