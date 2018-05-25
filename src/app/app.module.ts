import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './services/auth.service';
import { AgmCoreModule } from '@agm/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AuthGuard } from './guards/auth.guard';
import { MyAccountComponent } from './auth/my-account/my-account.component';
import { SitesListComponent } from './sites-list/sites-list.component';
import { HomeComponent } from './home/home.component';
import { SingleSiteComponent } from './single-site/single-site.component';
import { SiteFormComponent } from './site-form/site-form.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { SitesService } from './services/sites.service';
import { MissingPasswordComponent } from './auth/missing-password/missing-password.component';
import { PublicSiteComponent } from './public-site/public-site.component';
import { DefaultHomeComponent } from './single-site/template/default/default-home/default-home.component';
import { DefaultAboutComponent } from './single-site/template/default/default-about/default-about.component';
import { DefaultBlogComponent } from './single-site/template/default/default-blog/default-blog.component';
import { DefaultContactComponent } from './single-site/template/default/default-contact/default-contact.component';
import { DefaultElementComponent } from './single-site/template/default/default-element/default-element.component';
import { DefaultFooterComponent } from './single-site/template/default/default-footer/default-footer.component';
import { DefaultHeaderComponent } from './single-site/template/default/default-header/default-header.component';
import { UploadService } from './services/upload.service';
import { GeocodingService } from './services/geocoding.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    MyAccountComponent,
    SitesListComponent,
    SiteFormComponent,
    HomeComponent,
    SingleSiteComponent,
    JumbotronComponent,
    SiteFormComponent,
    MissingPasswordComponent,
    PublicSiteComponent,
    DefaultHomeComponent,
    DefaultAboutComponent,
    DefaultBlogComponent,
    DefaultContactComponent,
    DefaultElementComponent,
    DefaultFooterComponent,
    DefaultHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvg7KpaAKjbSbW1q3rOYOA_sTwSJgfDTY',
    }),
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthService, AuthGuard, SitesService, UploadService, GeocodingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
