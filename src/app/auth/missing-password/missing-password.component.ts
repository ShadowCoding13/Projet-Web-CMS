import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missing-password',
  templateUrl: './missing-password.component.html',
  styleUrls: ['./missing-password.component.scss']
})
export class MissingPasswordComponent implements OnInit {

  title: string = "Mot de passe oublié";
  subtitle: string = "Nous vous envoyons un mail de reinitialisation"

  missingForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.missingForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    const email = this.missingForm.get('email').value;
    
    this.authService.modificationPasswordUser(email).then(
      () => {
        alert('Nous vous avons envoyé un email de reinitialisation du mot de passe !')
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
