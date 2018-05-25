import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class GeocodingService {

  constructor(private http: HttpClient) {}

  geocoding(address: string){
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyCvg7KpaAKjbSbW1q3rOYOA_sTwSJgfDTY')
  }

}
