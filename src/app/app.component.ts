import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import {SitesService} from './services/sites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public url;

  constructor(public route: Router, public sitesService: SitesService) {
    const config = {
      apiKey: "AIzaSyA-ukB7GURuvywDyyJmkXoHJC_q-UDfpYM",
      authDomain: "my-best-cms.firebaseapp.com",
      databaseURL: "https://my-best-cms.firebaseio.com",
      projectId: "my-best-cms",
      storageBucket: "my-best-cms.appspot.com",
      messagingSenderId: "622951839899"
    };
    firebase.initializeApp(config);
    if (this.route.navigated) {
      this.url = this.route.url;
      console.log(this.url)
    }
  }

  ngOnInit(){
    this.url = this.route.url
  }

}
