import { Component, OnInit,ViewChild,ElementRef,NgZone, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,Platform,NavParams } from '@ionic/angular';
import { OtherService } from '../service/other/other.service';
import { ServerService } from '../service/server.service';
import { ApplePayEventsEnum, GooglePayEventsEnum, PaymentFlowEventsEnum, PaymentSheetEventsEnum, Stripe } from '@capacitor-community/stripe';
import { HttpClient, HttpParams } from '@angular/common/http';
import { first, lastValueFrom } from 'rxjs';

// declare var RazorpayCheckout: any;
declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PaymentPage implements OnInit {

  data:any;
  setting:any;
  payment_method:any;
  user:any;
  meta:any;
  customizations:any;
  customerDetails:any;
  text:any;
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

  constructor(public navParams: NavParams,public otherService : OtherService,private http: HttpClient,public server : ServerService) { 
  
    this.data  = navParams.get('data');
    this.user_id = localStorage.getItem('user_id');

    const setting  = localStorage.getItem('admin_setting');
    const userData = localStorage.getItem('user_data');
  
    if(setting !== null) 
    {
      this.setting = JSON.parse(setting);
    }

    if(userData !== null) 
    {
      this.user = JSON.parse(userData);
    }

    const text = localStorage.getItem('app_lang');
    
    if(text !== null) 
    {
      this.text =  JSON.parse(text);
      this.text = this.text.text;
    }

    Stripe.initialize({
      publishableKey: this.data.stripe_key,
    });

    this.meta      = {'counsumer_id': 778383, 'consumer_mac': "sdjksfhsd887f8s"}
    this.customizations = {title: 'Wallet Recharge', description: 'Wallet Recharge', logo: 'https://dicont.s3.amazonaws.com/static/flow-logos/flutterwave-logo.png'}
    this.customerDetails = { name: this.user.name, email: this.user.email, phone_number: this.user.phone}
  }

  ngOnInit() {
  } 

  
 async addAmountToWallet() {
    if (!this.data.amount) {
      this.otherService.toast(this.text.enter_amount);
    } else {
      // const data = { amount: this.amount, stripe_key: this.data.stripe };
      // this.openModel(data);

      const payload = {
        user_id: this.user_id,
        amount: this.data.amount,
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
      // window.location.reload();
      this.otherService.triggerLoadData.emit();
      this.otherService.closeModel(res);
    });
    this.message = 'Success Payment';
  }
  async updateWallet(id:any = null)
  {
    const data = {amount : this.data.amount,user_id : localStorage.getItem('user_id'),trans_id : id,payment_method : this.payment_method,notes : 'Wallet Recharge'}

    this.server.updateWallet(data).subscribe((response:any) => {
    
    this.payment_method = null;

    this.otherService.toast(this.text.payment_added);

    this.close(id);

    });
  }

  async close(data:any = null)
  {
    this.otherService.closeModel(data);
  }

  httpPost()
  {
    const body = {user : localStorage.getItem('user_id'),total : this.data.amount}

    return this.http.post<any>(this.server.getApiUrl() + 'stripePayment', body).pipe(first());
  }

  async paymentSheet() {

    this.payment_method = 1;

    /*
    With PaymentSheet, you can make payments in a single flow. 
    As soon as the User presses the payment button, 
    the payment is completed. (If you want user have some flow after that, 
    please use paymentFlow method)
    */

    try {
      // be able to get event of PaymentSheet
      Stripe.addListener(PaymentSheetEventsEnum.Completed, () => {
        // console.log('PaymentSheetEventsEnum.Completed');
      });
    
      // const data = new HttpParams({
      //   fromObject: this.data
      // });
      // Connect to your backend endpoint, and get every key.
      const data$ = this.httpPost();

      // console.log(data$);

      const { paymentIntent, ephemeralKey, customer } = await lastValueFrom(data$);

      // prepare PaymentSheet with CreatePaymentSheetOption.
      await Stripe.createPaymentSheet({
        paymentIntentClientSecret: paymentIntent,
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        merchantDisplayName: this.setting.app_name
      });

      // present PaymentSheet and get result.
      const result = await Stripe.presentPaymentSheet();
      // console.log('result: ', result);
      if (result && result.paymentResult === PaymentSheetEventsEnum.Completed) {
        
        this.updateWallet(this.splitAndJoin(paymentIntent));

      }
      else
      {
        this.otherService.toast(this.text.payment_cancel);
      }
    } catch(e) {
      this.otherService.toast(this.text.payment_cancel);
    }
  }


  splitAndJoin(paymentIntent:any) {
    const result = paymentIntent.split('_').slice(0, 2).join('_');
    // console.log(result);
    return result;
  }

  /*
  |---------------------------------
  |Pay with razorpay
  |--------------------------------
  */
  
  async payWithRazorpay() {
    var options = {
      description: 'Pay Now',
      image: 'https://cdn.iconscout.com/icon/free/png-512/bhim-3-69845.png',
      currency: "INR",
      key: this.setting.razor_key,
      amount: this.data.amount * 100,
      name: this.user.name,
      prefill: {
        email: this.user.email,
        contact: this.user.phone
      },
      theme: {
        color: '#2196f3'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = (success: any)=> {
      
      this.updateWallet(Date.now());

    };

    var cancelCallback =  (error:any) => {
      
      this.otherService.toast(this.text.payment_cancel);

    };

    // RazorpayCheckout.open(options, successCallback, cancelCallback);

  }

}
