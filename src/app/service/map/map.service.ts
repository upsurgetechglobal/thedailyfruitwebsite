import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
declare var google:any;

@Injectable({
  providedIn: 'root'
})
export class MapService {
  address:any;

  constructor(public nativeGeocoder: NativeGeocoder) { }

  getLocation()
  {
     const coordinates =  Geolocation.getCurrentPosition();

    console.log("data ",coordinates);

     return coordinates;
  }

  async getMap()
  {
    const coordinates =  await Geolocation.getCurrentPosition();
    
    let latLng = await new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude);
      
    let mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      
      return mapOptions;
  }

  async getAddress(lattitude:any,longitude:any)
  {
  
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
 
    await this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then(async (result: NativeGeocoderResult[]) => {
        this.address = "";

        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
  
          if(value.length > 0)
          responseAddress.push(value);
 
        }

       responseAddress.reverse();
        
       for (let value of responseAddress) {
        this.address += value+", ";
      }
      this.address = this.address.slice(0, -2);

      })
      .catch((error: any) =>{ 
      });

      console.log("Address  "+this.address);

      return this.address;
  }
}
