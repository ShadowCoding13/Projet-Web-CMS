import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../../../../models/site.model';
import { GeocodingService } from '../../../../services/geocoding.service';

@Component({
  selector: 'app-default-contact',
  templateUrl: './default-contact.component.html',
  styleUrls: ['./default-contact.component.scss'],
})
export class DefaultContactComponent implements OnInit {

  @Input() site: Site

  lat: number = 51.678418;
  lng: number = 7.809007;

  public maps;

  constructor(private geocoding: GeocodingService) { }

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
      )
  }

}
