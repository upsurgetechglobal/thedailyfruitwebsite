import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { MapService } from '../service/map/map.service';
import { OtherService } from '../service/other/other.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class LocationPage implements OnInit {

  lat:any;
  lng:any;
  hasClick = false;
  address:any;

  constructor(public mapService : MapService,public otherService : OtherService) { }

  ionViewWillEnter()
  {
    this.otherService.statusBar("#ffffff",2);

    this.getLocation();
  }

  ngOnInit() 
  {
    
  }

  async getLocation(red = false)
  {
    let data:any = await this.mapService.getLocation();
    
    let addressData = await this.mapService.getAddress(data.coords.latitude,data.coords.longitude);

    this.address = addressData;

    localStorage.setItem("current_lat",data.coords.latitude);
    localStorage.setItem("current_lng",data.coords.longitude);
    localStorage.setItem("current_address",this.address);

    if(red)
    {
      this.hasClick = true;

      this.otherService.redirectWithDelay('home');
    }
  }
  
  async home()
  {
    this.hasClick = true;

    if(this.address)
    {
      this.otherService.redirectWithDelay('home');
    }
    else
    {
      this.getLocation(true);
    }
  }

}
