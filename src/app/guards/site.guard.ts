import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { SitesService } from "../services/sites.service";

@Injectable()
export class SiteGuard implements CanActivate {

  private url;
  private isExisting 

  constructor(private router: ActivatedRoute, private nav: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        this.router.params.subscribe(params => {
          this.url = +params['site'];
        });
        firebase.database().ref(`sites/`)
          .once('value', (data : firebase.database.DataSnapshot) => {
              const existingSite = data.val() ? data : [];
              console.log(existingSite)
              for (let user = 0; user < 10; user++) {
                for (let site = 0; site < existingSite[user].length; site++) {
                  if (((existingSite[0][site].title as string).toLowerCase().replace(/ /g, "-") === this.url)) {
                    this.isExisting = true;
                  }
                }
              }
              if (this.isExisting === true) {
                resolve()
              } else {
                this.nav.navigate(['/home']);
                reject()
              }
            }
          )
      }
    );
  }
}