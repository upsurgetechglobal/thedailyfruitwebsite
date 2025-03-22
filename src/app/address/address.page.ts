import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, Platform, NavParams, AlertController } from '@ionic/angular';
import { MapService } from '../service/map/map.service';
import { OtherService } from '../service/other/other.service';
import { ServerService } from '../service/server.service';
import { Geolocation } from '@capacitor/geolocation';
declare var google: any;

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AddressPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement!: ElementRef;

  type: any = 'Home';
  address: any;
  floor: any;
  landmark: any;
  map: any;
  autocomplete: any;
  autocompleteItems: any = [];
  GoogleAutocomplete: any;
  placeid: any;
  show = true;
  lat: any;
  lng: any;
  hasClick = false;
  data: any;
  store_id: any;
  text: any;

  latitude: number | undefined;
  longitude: number | undefined;

  constructor(
    public navParams: NavParams,
    private platform: Platform,
    public zone: NgZone,
    public otherService: OtherService,
    public mapService: MapService,
    public server: ServerService,
    private alertCtrl: AlertController
  ) {
    // this.GoogleAutocomplete = new google.maps.places.AutocompleteService();

    this.data = navParams.get('data');
    this.store_id = navParams.get('store_id');

    const text = localStorage.getItem('app_lang');

    if (text !== null) {
      this.text = JSON.parse(text);
      this.text = this.text.text;
    }
  }

  ngOnInit() {
    this.getCurrentLocation();
  }
  async requestLocationPermission() {
    try {
      // Ask for permission first
      const permStatus = await Geolocation.requestPermissions();

      if (permStatus.location === 'granted') {
        this.getCurrentLocation();
      } else {
        this.showAlert(
          'Permission Denied',
          'Please allow location access in your app or browser settings.'
        );
      }
    } catch (error) {
      this.showAlert('Error', 'Unable to request location permission.');
      console.error('Permission request error', error);
    }
  }
  async getCurrentLocation() {
    try {
      // const position: Position = await Geolocation.getCurrentPosition();
      const position = await Geolocation.getCurrentPosition();
            this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log('Latitude:', this.latitude, 'Longitude:', this.longitude);
    } catch (error: any) {
      if (error.code === 1) {
        // Permission denied
        this.showAlert(
          'Location Permission Denied',
          'Please allow location access in your app or browser settings.'
        );
        
      } else {
        this.showAlert('Error', 'Failed to get your location.');
      }
      console.error('Error getting location', error);
    }
  }
  async showAlert(header: string, message: string)
  {
    this.otherService.confirmPernissions(header,message) .then(res => {
      // if (res === 'ok') {
        this.close()   
      // }
    });
  }

  // async showAlert(header: string, message: string): Promise<void> {
  //   const alert = await this.alertCtrl.create({
  //     header,
  //     message,
  //     buttons: ['OK'],
  //   });
  
  //   await alert.present();
  
  //   await alert.onDidDismiss();
  
  //   this.close();
  // }
  
  

  // async getCurrentLocation() {
  //   try {
  //     const position = await Geolocation.getCurrentPosition();
  //     console.log(position)
  //     this.latitude = position.coords.latitude;
  //     this.longitude = position.coords.longitude;
  //     console.log('Latitude:', this.latitude, 'Longitude:', this.longitude);
  //   } catch (error) {
  //     console.error('Error getting location', error);
  //   }
  // }

  setType(type: any) {
    this.type = type;
  }

  async ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  async close(data: any = []) {
    this.otherService.closeModel(data);
  }

  async loadMap() {
    this.map = null;
    this.show = true;
    let mapOptions = await this.mapService.getMap();

    this.map = await new google.maps.Map(
      this.mapElement.nativeElement,
      mapOptions
    );
    this.show = false;

    this.map.addListener('tilesloaded', async () => {
      this.lat = this.map.center.lat();
      this.lng = this.map.center.lng();
    });
  }

  UpdateSearchResults() {
    this.GoogleAutocomplete.getPlacePredictions(
      { input: this.autocomplete },
      (predictions: any, status: any) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction: any) => {
            this.autocompleteItems.push(prediction);
          });
        });
      }
    );
  }

  SelectSearchResult(item: any) {
    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();
    this.placeid = item.place_id;

    geocoder.geocode(
      {
        placeId: this.placeid,
      },
      (results: any, status: any) => {
        if (status === 'OK') {
          if (results[0]) {
            this.map.setZoom(16);
            this.map.setCenter(results[0].geometry.location);
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      }
    );

    this.ClearAutocomplete();
  }

  ClearAutocomplete() {
    this.autocompleteItems = [];
    this.autocomplete = '';
  }

  async saveAddress() {
    this.lat = this.latitude;
    this.lng = this.longitude;
    // console.log(this.address)
    if (!this.address || this.address.length < 4 || !this.lat || !this.lng) {
      return this.otherService.toast(this.text.correct_detail);
    }

    let allData = {
      type: this.type,
      address: this.address,
      floor: this.floor,
      landmark: this.landmark,
      lat: this.latitude,
      lng: this.longitude,
      user_id: localStorage.getItem('user_id'),
      store_id: this.store_id,
    };

    this.hasClick = true;

    this.server.saveAddress(allData).subscribe((response: any) => {
      this.hasClick = false;

      this.close(response.latest);
    });

    return;
  }
  
}
