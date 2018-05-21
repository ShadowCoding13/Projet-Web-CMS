import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  title: string = "Mon Compte";
  subtitle: string = "Modifier vos informations personnels";

  user: User;
  userSubscription: Subscription;

  errorMessage: string;

  editProfilForm: FormGroup;

  constructor(private authService: AuthService, 
              private formBuilder: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.userSubscription = this.authService.userSubject.subscribe(
      (user: User) => {
        this.user = user;
      }
    );
    this.authService.getUser();
    this.authService.emitUser();
    this.initForm();
  }

  // Suppression du compte de l'utilisateur
  onDeleteUser(){
    this.authService.deleteUser().then(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage = error;
        alert(this.errorMessage);
      }
    );
  }

  onModificationPassword(){
    this.authService.modificationPasswordUser(this.user.email).then(
      () => {
        alert('Un email vous a été envoyé pour modifier votre mot de passe.');
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage = error;
      }
    )
  }

  // Initilialisation du formulaire de modification d'identification
  initForm() {
    this.editProfilForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    const email = this.editProfilForm.get('email').value;
    
    this.authService.modificationEmailUser(email).then(
      () => {
        alert('Nous vous avons modifier votre adresse email !')
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
