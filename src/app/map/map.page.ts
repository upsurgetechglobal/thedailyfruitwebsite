import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA,ViewChild,ElementRef,NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,Platform } from '@ionic/angular';
import { OtherService } from '../service/other/other.service';
import { MapService } from '../service/map/map.service';
import { RouterLink } from '@angular/router';
declare var google:any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MapPage implements OnInit {

@ViewChild('map',{static:false}) mapElement!: ElementRef;
map: any;
autocomplete:any;
autocompleteItems:any = [];
GoogleAutocomplete: any;
placeid: any;
show = true;
address:any;
lat:any;
lng:any;
text:any;

  constructor(private platform: Platform,public zone: NgZone,public otherService : OtherService,public mapService : MapService) { 

    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();

    this.otherService.statusBar("#ffc927",2);

    const text = localStorage.getItem('app_lang');
    
    if(text !== null) 
    {
      this.text =  JSON.parse(text);
      this.text = this.text.text;
    }

  }

  ngOnInit() 
  {
    
  }

  ionViewDidEnter()
  {
    this.platform.ready().then(() => {

      this.loadMap();

     });
  }

  async loadMap() {
      this.map       = null;
      this.show      = true;
      let mapOptions = await this.mapService.getMap();
      
      this.map  = await new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.show = false;

      this.map.addListener('tilesloaded', async () => {
      
      let addressData = await this.mapService.getAddress(this.map.center.lat(),this.map.center.lng());

      this.address = addressData;
      
      localStorage.setItem("current_lat",this.map.center.lat());
      localStorage.setItem("current_lng",this.map.center.lng());
      localStorage.setItem("current_address",this.address);

      });
  }

  UpdateSearchResults()
  {  
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete },
    (predictions:any, status:any) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction:any) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }
  
  SelectSearchResult(item:any) 
  {    
    const geocoder    = new google.maps.Geocoder();
    const infowindow  = new google.maps.InfoWindow();
    this.placeid      = item.place_id;

    geocoder.geocode(
      {
        placeId: this.placeid
      },
      (results:any, status:any) => {
        if (status === "OK") {
          if (results[0]) {
          
          this.map.setZoom(16);
          this.map.setCenter(results[0].geometry.location);

          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      }
    );

    this.ClearAutocomplete();
  }
  
  
  ClearAutocomplete()
  {
    this.autocompleteItems = []
    this.autocomplete = ''
  }
}
