import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { AddressPage } from '../address/address.page';
import { OfferPage } from '../offer/offer.page';
import { PaymentPage } from '../payment/payment.page';
register();

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.page.html',
  styleUrls: ['./terms-and-conditions.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TermsAndConditionsPage implements OnInit {

  data:any;
  fakeData = [1,2,3,4];
  working_days:any;
  selectedDay:any = [];
  hasClick = false;
  text:any;
  notes:any;
  isMobile: boolean = false;
  total:any;
  savedAddress: any;
  address: any;
  cal: any;
  sub_time: any;
  start_date: any;
  checkout_data: any;
  payble_amount = 0;
  offer: any;
  save: any;


  constructor(
    public server : ServerService,public otherService : OtherService,
        private modalCtrl: ModalController
    
  ) { 
  
    const text = localStorage.getItem('app_lang');
    
    if(text !== null) 
    {
      this.text =  JSON.parse(text);
      this.text = this.text.text;
    }

    this.checkScreenSize();
  }

@HostListener('window:resize', ['$event'])
 onResize(event: any) {
   this.checkScreenSize();
 }

 private checkScreenSize() {
   this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
 }

  ngOnInit() {
  }

  ionViewDidEnter(){
   
    this.otherService.statusBar("#ffffff",2);

    // this.loadData();

  }

  // async loadData()
  // {
  //   this.server.getCart().subscribe((response:any) => {
  //     this.data         = response.data;
  //     this.data.map((res:any)=>{
  //       res.selected_price = Number(res.price)
  //     })
  //     this.CalculateTotal();
  //     this.getSavedAddress();
  //     this.working_days = response.working_day;
  //     this.selectedDay  = response.days;
  //      console.log(this.data )
  //     });
  // }

}
