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
    firebase.database().ref(`sites/${firebase.auth().currentUser.uid}`).set(this.sites);
  }

  getSites() {
    firebase.database().ref(`sites/${firebase.auth().currentUser.uid}`)
      .on('value', (data : firebase.database.DataSnapshot) => {
          this.sites = data.val() ? data.val() : [];
          this.emitSites();
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
    this.saveSites();
    this.emitSites();
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