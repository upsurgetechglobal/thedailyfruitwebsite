import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { MapService } from '../service/map/map.service';
import { OtherService } from '../service/other/other.service';

@Component({
  selector: 'app-delivery-location',
  templateUrl: './delivery-location.page.html',
  styleUrls: ['./delivery-location.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DeliveryLocationPage implements OnInit {

  popularLocations = [
    // { name: 'Hi-tech City', icon: 'assets/icon/hitech.jpg' },
    { name: 'Hi-tech City', icon: 'assets/icon/hyd.png' },
    { name: 'Gachibowli', icon: 'assets/icon/hyd.png' },
    { name: 'Banjara Hills', icon: 'assets/icon/hyd.png' },
    { name: 'Madhapur', icon: 'assets/icon/hyd.png' },
    { name: 'Kondapur', icon: 'assets/icon/hyd.png' },
    { name: 'Jubilee Hills', icon: 'assets/icon/hyd.png' },
    { name: 'kukatpally', icon: 'assets/icon/hyd.png' },
    { name: 'Miyapur', icon: 'assets/icon/hyd.png' },
  ];

  otherLocations = [
    'Secunderabad',
    'Begumpet',
    'Abids',
    'Dilsukhnagar',
    'Manikonda',
    'Tolichowki',
    'Kukatpally',
    'Nallagandla',
  ];

  constructor(private modalController: ModalController) {}

  ngOnInit(): void {
      
  }

  selectCity(city: any) {
    console.log('Selected City:', city);
    this.modalController.dismiss(city);
  }

}
