import { Component, OnInit,ViewChild,ElementRef,NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,Platform,NavParams } from '@ionic/angular';
import { OtherService } from '../service/other/other.service';
import { ServerService } from '../service/server.service';
import { ApplePayEventsEnum, GooglePayEventsEnum, PaymentFlowEventsEnum, PaymentSheetEventsEnum, Stripe } from '@capacitor-community/stripe';
import { HttpClient, HttpParams } from '@angular/common/http';
import { first, lastValueFrom } from 'rxjs';

declare var RazorpayCheckout: any;

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

  constructor(public navParams: NavParams,public otherService : OtherService,private http: HttpClient,public server : ServerService) { 
  
    this.data  = navParams.get('data');
    
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
        console.log('PaymentSheetEventsEnum.Completed');
      });
    
      // const data = new HttpParams({
      //   fromObject: this.data
      // });
      // Connect to your backend endpoint, and get every key.
      const data$ = this.httpPost();

      console.log(data$);

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
      console.log('result: ', result);
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
    console.log(result);
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

    RazorpayCheckout.open(options, successCallback, cancelCallback);

  }

}
