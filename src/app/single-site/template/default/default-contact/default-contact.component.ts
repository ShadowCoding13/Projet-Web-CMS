import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';
import { GeocodingService } from '../../../../services/geocoding.service';
import {SitesService} from '../../../../services/sites.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-default-contact',
  templateUrl: './default-contact.component.html',
  styleUrls: ['./default-contact.component.scss'],
})
export class DefaultContactComponent implements OnInit {

  @Input() site: Site

  lat: number = 51.678418;
  lng: number = 7.809007;

  editContactForm: FormGroup;

  public maps;

  constructor(private geocoding: GeocodingService,
              private formBuilder: FormBuilder,
              private sitesService: SitesService) { }

  ngOnInit() {
    this.geocoding.geocoding(
      this.site.contact.address.address +
      ',' +
      this.site.contact.address.city).subscribe(
        (data) => {
          this.maps = data
          this.lat = this.maps.results[0].geometry.location.lat
          this.lng = this.maps.results[0].geometry.location.lng
        }
    );
    this.initForm();
  }

  initForm() {
    this.editContactForm = this.formBuilder.group({
      text: [],
    });
  }

  onEditContact() {
    this.site.contact.description = this.editContactForm.get('text').value;
    this.sitesService.updateSite(this.site);
  }


}
