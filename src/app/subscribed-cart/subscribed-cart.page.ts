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
  selector: 'app-cart',
  templateUrl: './subscribed-cart.page.html',
  styleUrls: ['./subscribed-cart.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SubscribedCartPage implements OnInit {

  data:any;
  fakeData = [1,2,3,4];
  working_days:any;
  selectedDay:any = [];
  hasClick = false;
  text:any;
  notes:any;
  isMobile: boolean = false;
  total=0;
  savedAddress: any;
  address: any;
  cal: any;
  sub_time: any;
  start_date: any;
  checkout_data: any;
  payble_amount = 0;
  offer: any;
  save: any;
  user_id:any;

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
    this.user_id =localStorage.getItem('user_id')

  }

  ionViewDidEnter(){
   
    this.otherService.statusBar("#ffffff",2);

    this.loadData();

  }

  async loadData()
  {
    this.server.getCart().subscribe((response:any) => {
      // this.data  = response.data;
      const storedData = localStorage.getItem('subscribed_items');
      this.data = storedData ? [JSON.parse(storedData)] : [];
      console.log('this.data',this.data);
      
      this.data.map((res:any)=>{
        res.selected_price = Number(res.price) * res.qty
      })
      this.CalculateTotal();
      this.getSavedAddress();
      this.working_days = response.working_day;
      this.selectedDay  = response.days;
       console.log(this.data )
      });
  }

  increment(item: any) {
    if (item.qty < 10) {
    const existingItem = this.data.find(
      (res: any) => res.id === item.id
    );
    existingItem.qty += 1;
    existingItem.selected_price =
      Number(item.price) * Number(existingItem.qty);
      localStorage.setItem('subscribed_items',JSON.stringify(existingItem))
    this.CalculateTotal();
  }
  }

  decrement(item: any) {
    if (item.qty > 1) {
      const existingItem = this.data.find(
        (res: any) => res.id === item.id
      );
      existingItem.qty -= 1;
      existingItem.selected_price =
        Number(item.price) * Number(existingItem.qty);
        localStorage.setItem('subscribed_items',JSON.stringify(existingItem))
      this.CalculateTotal();
    }
  }

  CalculateTotal() {
    // console.log('this.data',this.data)
    
    this.total = this.data.reduce(
      (sum: number, res: any) => sum + (Number(res.selected_price) || 0) ,
      0
    );
    if (this.sub_time == 1) {
      this.total = this.total * 1;
    } else if (this.sub_time == 2) {
      this.total = this.total * 6;
    } else if (this.sub_time == 3) {
      this.total = this.total * 12;
    } else if (this.sub_time == 4) {
      this.total = this.total * 24;
    }

    // localStorage.setItem('selectedItms', JSON.stringify(this.selectedItms));
  }
  getSavedAddress() {
    this.server.checkoutData().subscribe((response: any) => {
      this.checkout_data = response.data;
      this.savedAddress = this.checkout_data.address;
    });
  }
   async getAddress() {
    if(!this.user_id){
      this.continue();
      }else{
      const allData = { data: this.savedAddress, store_id: this.data?.store?.id ? this.data.store.id : 1 };
  
      const modal = await this.modalCtrl.create({
        component: AddressPage,
        animated: true,
        mode: 'ios',
        componentProps: allData,
      });
  
      modal.onDidDismiss().then((data) => {
        if (data.data.id) {
          this.address = data.data;
        }
      });
  
      return await modal.present();
    }
    }
  
    async startDate() {
      if (!this.sub_time) {
        return this.otherService.toast(this.text.sub_time);
      }
  
      if (!this.start_date) {
        return;
      }
  
      this.otherService.showLoading();
  
      const allData = {
        plan: this.sub_time,
        start_date: this.start_date,
        cart_no: localStorage.getItem('cart_no'),
        user_id: localStorage.getItem('user_id'),
        store_id: this.checkout_data.store.id,
        item_id:this.data[0].id,
        qty:this.data[0].qty
      };
      this.CalculateTotal();
      // if (this.sub_time == 1) {
      //   this.total = this.total * 1;
      // } else if (this.sub_time == 2) {
      //   this.total = this.total * 6;
      // } else if (this.sub_time == 3) {
      //   this.total = this.total * 12;
      // } else if (this.sub_time == 4) {
      //   this.total = this.total * 24;
      // }
      this.server.getSubAmount(allData).subscribe((response: any) => {
        console.log('response',response)
        this.cal = response;
        this.cal.summery = [this.cal.summery[0]]
        this.cal.summery.map((res:any)=>{
          res.item_id = this.data[0].id;
          res.item = this.data[0].name;

        })
        console.log( this.cal)
        // this.total = this.cal.total;
        this.otherService.hideLoading();
      });
    }
  
    async getOffer() {
      const modal = await this.modalCtrl.create({
        component: OfferPage,
        animated: true,
        mode: 'ios',
        componentProps: {
          data: this.checkout_data.offer,
        },
      });
  
      modal.onDidDismiss().then((data) => {
        if (data.data.code) {
          this.offer = data.data;
  
          this.applyOffer();
        }
      });
  
      return await modal.present();
    }
  
    async applyOffer() {
      if (this.offer.type == 1) {
        const val = (this.cal.total * this.offer.value) / 100;
        // this.total = this.cal.total - val;
        this.payble_amount = this.total - val;
        this.save = val.toFixed(1);
      } else {
        this.payble_amount = this.total - this.offer.value;
        // this.total = this.cal.total - this.offer.value;
        this.save = this.offer.value;
      }
    }
    validate() {
      return !!(this.sub_time && this.start_date && this.address);
      // return !!(this.address);
    }
    async placeOrder() {
      if (this.validate()) {
        if (this.total > this.checkout_data.user.wallet) {
          const data = {
            amount: this.total - this.checkout_data.user.wallet,
            stripe_key: this.checkout_data.stripe_id,
          };
  
          this.openpaymentsModel(data);
        } else {
          this.checkout();
        }
      } else {
        this.otherService.toast(this.text.all_field);
      }
    }
  
    async openpaymentsModel(allData: any) {
      const modal = await this.modalCtrl.create({
        component: PaymentPage,
        animated: true,
        mode: 'ios',
        componentProps: {
          data: allData,
        },
      });
  
      modal.onDidDismiss().then((data) => {
        if (data.data) {
          this.checkout();
        } else {
          this.otherService.toast(this.text.payment_cancel);
        }
      });
  
      return await modal.present();
    }
  
    async checkout() {
      this.hasClick = true;
  
      const allData = {
        user_id: localStorage.getItem('user_id'),
        cart_no: localStorage.getItem('cart_no'),
        cal: this.cal,
        address: this.address.id,
        plan: this.sub_time,
        total: this.save ? (this.total - Number(this.save)): this.total,
        discount: this.save,
        store_id: this.checkout_data.store.id,
        notes:
          localStorage.getItem('order_notes') &&
          localStorage.getItem('order_notes') != 'undefined'
            ? localStorage.getItem('order_notes')
            : null,
      };
      console.log(allData)
  
      this.server.placeOrder(allData).subscribe((response: any) => {
        if (response.done == true) {
          // this.show = false;
  
          localStorage.removeItem('order_notes');
  
          this.otherService.redirect('success');
        } else {
          this.otherService.toast(response.error);
        }
  
        this.hasClick = false;
      });
    }
    removeDiscount(event:any){
      event.stopPropagation();
      this.save = 0;
      this.payble_amount = 0
    }

  async remove(id:any)
  {
    this.otherService.confirm() .then(res => {
      if (res === 'ok') 
      {
        this.server.getCart(id).subscribe((response:any) => {
      
          this.data = response.data;
          this.data.map((res:any)=>{
            res.selected_price = res.price
          })
          this.CalculateTotal();

          this.otherService.toast(this.text.removed);
          
          });       
      }
    });
  }

  async selectDay(day:any,cart:any)
  {    
    let chk = this.checkSelected(day,cart);

    if(chk)
    {
      chk = chk == 999 ? 0 : chk;

      this.selectedDay.splice(chk,1);
    }
    else
    {
        this.selectedDay.push({day : day,id : cart.id});
    }

  }

  checkSelected(day:any,cart:any,remove = false)
  {   
    for(var i =0;i<this.selectedDay.length;i++)
    {
      if(this.selectedDay[i].day === day && this.selectedDay[i].id == cart.id)
      {        
        return i == 0 ? 999 : i;
      }
    }

    return false;
  }

  // validate()
  // {
  //   const arr:any = [];

  //   for(var i =0;i<this.data.length;i++)
  //   {
  //     arr.push(this.data[i].id);
  //   }

  //   const ids    = this.selectedDay.map((item: { id: any; }) => item.id);
  //   const result = arr.every((item: any) => ids.includes(item));

  //   console.log(result);

  //   return result ? true : false;

  // }

  async continue()
  {
    localStorage.setItem("order_notes",this.notes);

    // if(this.validate())
    // {
      this.hasClick = true;

      this.server.updateDays({days : this.selectedDay}).subscribe((response:any) => {

      this.hasClick = false;

      this.otherService.redirect("checkout/0");

      });
    // }
    // else
    // {
    //   this.otherService.toast(this.text.select_days);
    // }
  }

}
