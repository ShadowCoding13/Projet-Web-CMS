import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import {SitesService} from '../services/sites.service';
import {Site} from '../models/site.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = "My Best CMS";
  subtitle: string = "Le meilleur des CMS mobiles !";

  isAuth: boolean;

  views;
  viewsSubscription: Subscription;

  constructor(private route: Router, private authService: AuthService, public sitesService: SitesService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
    this.viewsSubscription = this.sitesService.viewsSubject.subscribe(
      (views) => {
        this.views = views;
      }
    );
    this.sitesService.getPublicSites();
    this.sitesService.emitViews();
  }

  onSignin(){
    this.route.navigate(['/auth/signin']);
  }

  onSignup(){
    this.route.navigate(['/auth/signup']);
  }

}
