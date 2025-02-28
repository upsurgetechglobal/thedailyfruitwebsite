import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,ModalController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { RouterLink } from '@angular/router';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
import { AddressPage } from '../address/address.page';
import { PaymentPage } from '../payment/payment.page';
import { OfferPage } from '../offer/offer.page';
register();

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CheckoutPage implements OnInit {
  
  data:any;
  fakeData = [1,2,3,4,5,6];
  sub_time:any;
  start_date:any;
  address:any;
  savedAddress:any;
  cal:any;
  hasClick = false;
  show = true;
  offer:any;
  total:any;
  save:any;
  text:any;
  isMobile: boolean = false;

  constructor(public server : ServerService,public otherService : OtherService,private modalCtrl: ModalController) 
  {
    this.otherService.statusBar("#ffffff",2);

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

  ionViewDidEnter()
  {
    this.loadData();
  }

  async loadData()
  {
    this.server.checkoutData().subscribe((response:any) => {
      
      this.data = response.data;
      console.log('this.data',this.data)
      this.savedAddress = this.data.address;
      
      });
  }

  
  validate()
  {
    return !!(this.sub_time && this.start_date && this.address);
  }

  async getAddress()
  {
    const allData = {data : this.savedAddress,store_id : this.data.store.id}

    const modal = await this.modalCtrl.create({
      component: AddressPage,
      animated:true,
      mode:'ios',
      componentProps: allData

    });

   modal.onDidDismiss().then(data=>{
    
    console.log(data);

    if(data.data.id)
    {
      this.address = data.data;
    }

    })

    return await modal.present();

  }

  async startDate()
  {
    if(!this.sub_time)
    {
      return this.otherService.toast(this.text.sub_time);
    }
    
    if(!this.start_date)
    {
      return;
    }

    this.otherService.showLoading();

    const allData = {
      
      plan        : this.sub_time,
      start_date  : this.start_date,
      cart_no     : localStorage.getItem('cart_no'),
      user_id     : localStorage.getItem('user_id'),
      store_id    : this.data.store.id

      }

      this.server.getAmount(allData).subscribe((response:any) => {

      this.cal = response;

      this.total = this.cal.total;
            
      this.otherService.hideLoading();

      console.log(this.cal.summery);


      });
  }

  async checkout()
  {
      this.hasClick = true;

      const allData = {

        user_id : localStorage.getItem('user_id'),
        cart_no : localStorage.getItem('cart_no'),
        cal     : this.cal,
        address : this.address.id,
        plan    : this.sub_time,
        total   : this.total,
        discount : this.save,
        store_id : this.data.store.id,
        notes   : localStorage.getItem('order_notes') && localStorage.getItem('order_notes') != 'undefined' ? localStorage.getItem('order_notes') : null
      }

      this.server.placeOrder(allData).subscribe((response:any) => {
      
      if(response.done == true)
      {
        this.show = false;
        
        localStorage.removeItem("order_notes");
        
        this.otherService.redirect('success');
      }
      else
      {
        this.otherService.toast(response.error);
      }

      this.hasClick = false;

      });
  }

  async placeOrder()
  {
    if(this.validate())
    {
      if(this.total > this.data.user.wallet)
      {
        const data = { amount : this.total - this.data.user.wallet,stripe_key : this.data.stripe_id }

        this.openModel(data);
      }
      else
      {
        this.checkout();
      }
    }
    else
    {
      this.otherService.toast(this.text.all_field);
    }
  }

  async openModel(allData:any) {
    const modal = await this.modalCtrl.create({
      component: PaymentPage,
      animated:true,
      mode:'ios',
      componentProps: {
        'data': allData,
      }

    });

   modal.onDidDismiss().then(data=>{
    
    if(data.data)
    {
      this.checkout();
    }
    else
    {
      this.otherService.toast(this.text.payment_cancel);
    }

    })

    return await modal.present();
  }

  async getOffer() {
    const modal = await this.modalCtrl.create({
      component: OfferPage,
      animated:true,
      mode:'ios',
      componentProps: {
      'data' : this.data.offer
      }

    });

   modal.onDidDismiss().then(data=>{
    
    if(data.data.code)
    {
      this.offer = data.data;

      this.applyOffer();
    }
    

    })

    return await modal.present();
  }

  async applyOffer()
  {
    if(this.offer.type == 1)
    {
      const val  = this.cal.total * this.offer.value / 100;
      this.total = this.cal.total - val;
      this.save  = val.toFixed(1);
    }
    else
    {
      this.total = this.cal.total - this.offer.value;
      this.save  = this.offer.value;
    }
  }
}

