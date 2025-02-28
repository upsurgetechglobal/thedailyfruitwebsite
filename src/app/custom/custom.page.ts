import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { OtherService } from '../service/other/other.service';
import { ServerService } from '../service/server.service';

register();

@Component({
  selector: 'app-custom',
  templateUrl: './custom.page.html',
  styleUrls: ['./custom.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CustomPage implements OnInit {

  qty:number = 1;
  data:any;
  type:any = 2;
  store:any;
  hasClick = false;
  cart_no:any;
  addData:any = [];
  total:any;
  text:any;
  
  constructor(public otherService : OtherService,public server : ServerService) { 

    const itemData  = localStorage.getItem('custom_data');
    const storeData = localStorage.getItem('store_data');
    
    if(itemData !== null) 
    {
      this.data = JSON.parse(itemData);
    }

    if(storeData !== null) 
    {
      this.store = JSON.parse(storeData);
    }

    const text = localStorage.getItem('app_lang');
    
    if(text !== null) 
    {
      this.text =  JSON.parse(text);
      this.text = this.text.text;
    }

    //create or set cart no
    if (localStorage.getItem('cart_no') == 'null' || localStorage.getItem('cart_no') == undefined) {
      this.cart_no = Math.floor(Math.random() * 2000000000) + 1;
      localStorage.setItem('cart_no', this.cart_no);
    }
    else {
      this.cart_no = localStorage.getItem('cart_no');
    }
  }

  ngOnInit() {
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
    item      : this.addData,
    item_type : this.type,
    store_id  : this.store.id,
    price     : this.getTotal()

    }

    console.log(allData);

    this.server.customCart(allData).subscribe((response:any) => {

     this.hasClick = false;

     this.otherService.toast(this.text.added);
      
      this.otherService.goBack();

      });
  }

  chkFilter(item:any)
  { 
    if(this.type == 1)
    {
      return true;
    }
    else if(this.type == 2)
    {
      return item.breakfast == 1 ? true : false;
    }
    else if(this.type == 3)
    {
      return item.lunch == 1 ? true : false;
    }
    else if(this.type == 4)
    {
      return item.dinner == 1 ? true : false;
    }
    
    return true;
  }

  add(item:any)
  {
    this.addData.push({id : item.id,qty : 1,price : item.price});
  }

  hasItem(id:any)
  {    
    for(var i =0;i < this.addData.length;i++)
    {
      if(id == this.addData[i].id)
      {        
        return this.addData[i].qty;
      }
    }

    return false;
  }

  update(type:any,id:any)
  {
    this.getTotal();

    for (var i = 0; i < this.addData.length; i++) {
      if (id == this.addData[i].id) {
        if (type == 1)
        {
          this.addData[i].qty += 1;
        } 
        else 
        {
          if (this.addData[i].qty == 1) 
          {
            this.addData.splice(i, 1);

          } else 
          {
            this.addData[i].qty -= 1;
          }
        }

        return this.addData[i].qty;
      }
    }
  }

  setType(data:any)
  {
    this.addData = [];
  }

  getTotal()
  {    
    let totalPrice = 0;

    for (let i = 0; i < this.addData.length; i++) 
    {
      const item = this.addData[i];
      const total:any = (item.price*1) * (item.qty*1);
      totalPrice += parseInt(total);
    }

   return totalPrice;
  }
}
