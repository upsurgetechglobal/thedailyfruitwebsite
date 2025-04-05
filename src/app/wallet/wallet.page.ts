import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,ModalController } from '@ionic/angular';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
import { PaymentPage } from '../payment/payment.page';

declare var Razorpay: any;
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class WalletPage implements OnInit {
  type: any = 1;
  amount: any;
  data: any;
  fakeData = [1, 2, 3, 4, 5, 6, 7];
  setting: any;
  text: any;
  isMobile: boolean = false;

  options = {
    // key: environment.razorpayKey,
    key: '',
    amount: 0,
    name: '',
    description: 'The Daily Fruit',
    image: '',
    order_id: '',
    handler: function (response: any) {
      // // console.log(response);
      var event = new CustomEvent('payment.success', {
        detail: response,
        bubbles: true,
        cancelable: true,
      });
      window.dispatchEvent(event);
    },
    prefill: {
      name: '',
      email: '',
      contact: '',
    },
    notes: {
      address: '',
    },
    theme: {
      color: '#3399cc',
    },
  };
  message: any = 'Not yet stared';
  paymentId = '';
  error = '';
  user_id: any;

  constructor(
    public server: ServerService,
    public otherService: OtherService,
    private modalCtrl: ModalController
  ) {
    const setting = localStorage.getItem('admin_setting');
    this.user_id = localStorage.getItem('user_id');

    if (setting !== null) {
      this.setting = JSON.parse(setting);
    }

    const text = localStorage.getItem('app_lang');

    if (text !== null) {
      this.text = JSON.parse(text);
      this.text = this.text.text;
    }
  }

  ngOnInit() {}
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }

  ionViewDidEnter() {
    this.loadData();
  }

  async loadData(amount = 0) {
    this.server.getWallet(amount).subscribe((response: any) => {
      this.data = response.data;
      // console.log(this.data);
      this.amount = null;
    });
  }

  async add() {
    if (!this.amount) {
      this.otherService.toast(this.text.enter_amount);
    } else {
      // const data = { amount: this.amount, stripe_key: this.data.stripe };
      // this.openModel(data);

      const payload = {
        user_id: this.user_id,
        amount: this.amount,
        notes: 'Add To Wallet Razorpay',
      };
      // console.log('payload', payload);
      (await this.server.createRazorpayOrder(payload)).subscribe((res:any) => {
        // console.log('res',res)
        this.options.key = res.razor_key.replace(/\r\n/g, "");
          this.options.order_id = res.order_id;
          this.options.amount = Number(res.amount);
          this.options.name = 'The Daily Fruit';
          this.options.prefill.name = 'The Daily Fruit';
          this.options.prefill.email = 'support@thedailyfruit.in';
          this.options.prefill.contact ='9998887776';
          this.payNow();
      
      });
    }
  }
  payNow() {
    if (typeof Razorpay === 'undefined') {
      console.error('Razorpay is not loaded yet.');
      return;
    }
  
    // console.log('this.options', this.options);
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
  
    rzp1.on('payment.failed', function (response: any) {
      console.error('Payment failed', response.error);
    });
  }
  

  @HostListener('window:payment.success', ['$event'])
  async onPaymentSuccess(event: any): Promise<void> {
    let response = event.detail;
    // console.log('response',response)
    let payload = {
      razorpay_order_id: response?.razorpay_order_id,
      razorpay_payment_id: response?.razorpay_payment_id,
      razorpay_signature: response?.razorpay_signature,
    };
    // console.log('payload', payload);
    (await this.server.verifyRazorpayOrder(payload)).subscribe((res:any) => {
      window.location.reload();
    });
    this.message = 'Success Payment';
  }

  async openModel(data: any) {
    const modal = await this.modalCtrl.create({
      component: PaymentPage,
      animated: true,
      mode: 'ios',
      componentProps: {
        data: data,
      },
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.loadData();
      } else {
        this.otherService.toast(this.text.payment_cancel);
      }
    });

    return await modal.present();
  }
}
