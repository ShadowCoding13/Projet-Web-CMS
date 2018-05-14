import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = "My Best CMS";
  subtitle: string = "Le meilleur des CMS mobiles !";

  isAuth: boolean;

  constructor(private route: Router, private authService: AuthService) { }

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
  }

  onSignin(){
    this.route.navigate(['/auth/signin']);
  }

  onSignup(){
    this.route.navigate(['/auth/signup']);
  }

}
