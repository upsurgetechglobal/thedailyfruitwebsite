import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA,HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,ModalController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { OtherService } from '../service/other/other.service';
import { ServerService } from '../service/server.service';
import { FeedbackPage } from '../feedback/feedback.page';
import { RouterLink } from '@angular/router';

register();

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DetailPage implements OnInit {

  qty:number = 1;
  data:any;
  type:any;
  store:any;
  hasClick = false;
  cart_no:any;
  text:any;
  isMobile: boolean = false;
  days:any = ["Monday","Tuesday"];


  constructor(public otherService : OtherService,public server : ServerService,private modalCtrl: ModalController) { 

    this.type       = localStorage.getItem('item_type');
    const itemData  = localStorage.getItem('item_data');
    const storeData = localStorage.getItem('store_data');
    
    const text = localStorage.getItem('app_lang');
    
    if(text !== null) 
    {
      this.text =  JSON.parse(text);
      this.text = this.text.text;
    }

    if (itemData !== null) 
    {
      this.data = JSON.parse(itemData);
    }

    if (storeData !== null) 
    {
      this.store = JSON.parse(storeData);
    }

    //create or set cart no
    if (localStorage.getItem('cart_no') == 'null' || localStorage.getItem('cart_no') == undefined) {
      
      this.cart_no = Math.floor(Math.random() * 2000000000) + 1;
      localStorage.setItem('cart_no', this.cart_no);
    }
    else {
      this.cart_no = localStorage.getItem('cart_no');
    }

    this.checkScreenSize();
  }

  ngOnInit() {
  }

@HostListener('window:resize', ['$event'])
 onResize(event: any) {
   this.checkScreenSize();
 }

 private checkScreenSize() {
   this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
 }

  addQty(type:any)
  {
    if(type == 0)
    {
      this.qty = (this.qty*1)+(1*1);
    }
    else
    {
      this.qty = this.qty > 1 ? this.qty - 1 : 1;
    }
  }

  async goBack()
  {
    return this.otherService.goBack();
  }

  async add_to_cart()
  {
    this.hasClick = true;

    var allData = {

    cart_no   : this.cart_no,
    item_id   : this.data.id,
    price     : this.data.price,
    item_type : this.type,
    qty       : this.qty,
    store_id  : this.data.store_id,
    days      : this.days   

    }

    this.server.add_to_cart(allData).subscribe((response:any) => {

     this.hasClick = false;

     this.otherService.toast(this.text.added);
      
      this.goBack();

      });
  }

  async openModel() {
    const modal = await this.modalCtrl.create({
      component: FeedbackPage,
      animated:true,
      mode:'ios',
      componentProps: {
        'data': this.data,
      }

    });

   modal.onDidDismiss().then(data=>{
    
  
    })

    return await modal.present();
  }
}
