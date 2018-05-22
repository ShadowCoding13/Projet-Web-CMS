import { NgModule } from '@angular/core';
import { CanActivate, Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './guards/auth.guard';
import { MyAccountComponent } from './auth/my-account/my-account.component';
import { SitesListComponent } from './sites-list/sites-list.component';
import { HomeComponent } from './home/home.component';
import { SingleSiteComponent } from './single-site/single-site.component';
import { SiteFormComponent } from './site-form/site-form.component';
import { MissingPasswordComponent } from './auth/missing-password/missing-password.component';
import { PublicSiteComponent } from './public-site/public-site.component';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/my-account', canActivate: [AuthGuard], component: MyAccountComponent },
  { path: 'auth/missing-password', component: MissingPasswordComponent },
  { path: 'sites', canActivate: [AuthGuard], component: SitesListComponent },
  { path: 'sites/new', canActivate: [AuthGuard], component: SiteFormComponent },
  { path: 'sites/view/:id', canActivate: [AuthGuard], component: SingleSiteComponent },
  { path: 'home', component: HomeComponent},
  { path: 'public/:author/:site', component: PublicSiteComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
