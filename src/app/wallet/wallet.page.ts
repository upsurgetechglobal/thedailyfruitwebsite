import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,ModalController } from '@ionic/angular';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
import { PaymentPage } from '../payment/payment.page';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class WalletPage implements OnInit {

  type:any = 1;
  amount:any;
  data:any;
  fakeData = [1,2,3,4,5,6,7];
  setting:any;
  text:any;

  constructor(public server : ServerService,public otherService : OtherService,private modalCtrl: ModalController) {

    const setting  = localStorage.getItem('admin_setting');
  
    if(setting !== null) 
    {
      this.setting = JSON.parse(setting);
    }

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
    this.loadData();
  }

  async loadData(amount = 0)
  {
    this.server.getWallet(amount).subscribe((response:any) => {
    
      this.data   = response.data;
      console.log(this.data)
      this.amount = null;

    });
  }

  add()
  {    
    if(!this.amount)
    {
      this.otherService.toast(this.text.enter_amount);
    }
    else
    {
      const data = { amount : this.amount, stripe_key : this.data.stripe }

      this.openModel(data);
    }

  } 

  async openModel(data:any) {
    const modal = await this.modalCtrl.create({
      component: PaymentPage,
      animated:true,
      mode:'ios',
      componentProps: {
        'data': data,
      }

    });

   modal.onDidDismiss().then(data=>{
    
    if(data.data)
    {
      this.loadData();
    }
    else
    {
      this.otherService.toast(this.text.payment_cancel);
    }

    })

    return await modal.present();
  }
}
