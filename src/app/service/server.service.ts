import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { OtherService } from './other/other.service';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  //url = "http://localhost/tiffin_go/api/";
  // url = 'http://localhost/daily_fruit_admin/api/';
  url  = environment.api_url;
  private token: string | null = null;
  private headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient, public otherService: OtherService) {
    this.loadTokenAndSetHeaders();
  
    this.otherService.triggerLoadData.subscribe(() => {
      this.loadTokenAndSetHeaders();
    });
  }

  private loadTokenAndSetHeaders(): void {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      });
    } else {
      this.headers = new HttpHeaders(); // clear or keep default headers if token doesn't exist
    }
  }

  welcome() {
    return this.http.get(this.url + 'welcome').pipe(map((results) => results));
  }

  homepage() {
    return this.http
      .get(
        this.url +
          'homepage?lat=' +
          localStorage.getItem('current_lat') +
          '&lng=' +
          localStorage.getItem('current_lng') +
          '&cart_no=' +
          localStorage.getItem('cart_no') +
          '&lid=' +
          localStorage.getItem('lang_id')
      )
      .pipe(map((results) => results));
  }

  view(type: any) {
    return this.http
      .get(
        this.url +
          'view?lat=' +
          localStorage.getItem('current_lat') +
          '&lng=' +
          localStorage.getItem('current_lng') +
          '&type=' +
          type +
          '&lid=' +
          localStorage.getItem('lang_id')
      )
      .pipe(map((results) => results));
  }

  item(request: any) {
    return this.http
      .get(
        this.url +
          'getItem?store_id=' +
          request.store_id +
          '&category_id=' +
          request.cat_id +
          '&cart_no=' +
          localStorage.getItem('cart_no') +
          '&lid=' +
          localStorage.getItem('lang_id')
      )
      .pipe(map((results) => results));
  }

  add_to_cart(data: any) {
    return this.http
      .post(this.url + 'add_to_cart', data)
      .pipe(map((results) => results));
  }

  getCart(id = 0) {
    return this.http
      .get(
        this.url +
          'getCart?cart_no=' +
          localStorage.getItem('cart_no') +
          '&cart_remove_id=' +
          id +
          '&lid=' +
          localStorage.getItem('lang_id')
      )
      .pipe(map((results) => results));
  }

  // signup(data: any) {
  //   return this.http
  //     .post(this.url + 'signup', data)
  //     .pipe(map((results) => results));
  // }

  signup(data: any) {
    return this.http
      .post(this.url + 'v1/signup', data)
      .pipe(map((results) => results));
  }

  // login(data: any) {
  //   return this.http
  //     .post(this.url + 'login', data)
  //     .pipe(map((results) => results));
  // }

  login(data: any) {
    return this.http
      .post(this.url + 'v1/login', data)
      .pipe(map((results) => results));
  }

  // resendCode(id: any) {
  //   return this.http
  //     .get(this.url + 'resendCode?id=' + id)
  //     .pipe(map((results) => results));
  // }

  resendCode(id: any) {
    return this.http
      .get(this.url + 'v1/resendCode?id=' + id)
      .pipe(map((results) => results));
  }

  // verifyOtp(data: any, id: any) {
  //   return this.http
  //     .post(this.url + 'verifyOtp?id=' + id, data)
  //     .pipe(map((results) => results));
  // }
  
  verifyOtp(data: any, id: any) {
    return this.http
      .post(this.url + 'v1/verifyOtp?id=' + id, data)
      .pipe(map((results) => results));
  }

  // forgot(data: any) {
  //   return this.http
  //     .post(this.url + 'forgot', data)
  //     .pipe(map((results) => results));
  // }

  forgot(data: any) {
    return this.http
      .post(this.url + 'v1/forgot', data)
      .pipe(map((results) => results));
  }

  // resetPassword(data: any, id: any) {
  //   return this.http
  //     .post(this.url + 'resetPassword?id=' + id, data)
  //     .pipe(map((results) => results));
  // }

  resetPassword(data: any, id: any) {
    return this.http
      .post(this.url + 'v1/resetPassword?id=' + id, data)
      .pipe(map((results) => results));
  }

  checkoutData() {
    return this.http
      .get(
        this.url +
          'checkoutData?user_id=' +
          localStorage.getItem('user_id') +
          '&cart_no=' +
          localStorage.getItem('cart_no') +
          '&lid=' +
          localStorage.getItem('lang_id')
      )
      .pipe(map((results) => results));
  }

  saveAddress(data: any) {
    return this.http
      .post(this.url + 'saveAddress', data)
      .pipe(map((results) => results));
  }

  getAddress() {
    return this.http
      .get(
        this.url +
          'getAddress?user_id=' +
          localStorage.getItem('user_id') +
          '&lid=' +
          localStorage.getItem('lang_id')
      )
      .pipe(map((results) => results));
  }

  getAmount(data: any) {
    return this.http
      .post(this.url + 'getAmount', data)
      .pipe(map((results) => results));
  }

  getSubAmount(data: any) {
    return this.http
      .post(this.url + 'getsubAmount', data)
      .pipe(map((results) => results));
  }

  updateDays(data: any) {
    return this.http
      .post(
        this.url + 'updateDays?cart_no=' + localStorage.getItem('cart_no'),
        data
      )
      .pipe(map((results) => results));
  }

  placeOrder(data: any) {
    return this.http
      .post(this.url + 'placeOrder', data)
      .pipe(map((results) => results));
  }

  updateWallet(data: any) {
    return this.http
      .post(this.url + 'updateWallet', data)
      .pipe(map((results) => results));
  }

  // getWallet(amount = 0) {
  //   return this.http
  //     .get(
  //       this.url +
  //         'getWallet?user_id=' +
  //         localStorage.getItem('user_id') +
  //         '&amount=' +
  //         amount +
  //         '&lid=' +
  //         localStorage.getItem('lang_id')
  //     )
  //     .pipe(map((results) => results));
  // }

  getWallet(amount = 0) {
    return this.http.get(this.url +'v1/getWallet',{headers:this.headers})
      .pipe(map((results) => results));
  }


  async createRazorpayOrder(request:any){
    return this.http
    .post(this.url + 'razorpay/create-order', request)
    .pipe(map((results) => results));
  }

  async verifyRazorpayOrder(request:any){
    return this.http
    .post(this.url + 'razorpay/verify-payment', request)
    .pipe(map((results) => results));
  }

  subscription() {
    return this.http
      .get(
        this.url +
          'subscription?user_id=' +
          localStorage.getItem('user_id') +
          '&lid=' +
          localStorage.getItem('lang_id')
      )
      .pipe(map((results) => results));
  }

  mark(data: any) {
    return this.http
      .post(this.url + 'mark', data)
      .pipe(map((results) => results));
  }

  undo(id: any) {
    return this.http
      .get(this.url + 'undo?id=' + id)
      .pipe(map((results) => results));
  }

  // account() {
  //   return this.http
  //     .get(
  //       this.url +
  //         'account?user_id=' +
  //         localStorage.getItem('user_id') +
  //         '&lid=' +
  //         localStorage.getItem('lang_id')
  //     )
  //     .pipe(map((results) => results));
  // }

  account() {
    return this.http.get(this.url +'v1/account',{ headers: this.headers })
      .pipe(map((results) => results));
  }

  deleteAccount() {
    return this.http
      .get(
        this.url +
          'deleteAccount?user_id=' +
          localStorage.getItem('user_id') +
          '&lid=' +
          localStorage.getItem('lang_id')
      )
      .pipe(map((results) => results));
  }

  deleteAddress(id: any) {
    return this.http
      .get(
        this.url +
          'deleteAddress?user_id=' +
          localStorage.getItem('user_id') +
          '&id=' +
          id +
          '&lid=' +
          localStorage.getItem('lang_id')
      )
      .pipe(map((results) => results));
  }

  updateData(data: any) {
    return this.http
      .post(
        this.url + 'updateData?user_id=' + localStorage.getItem('user_id'),
        data
      )
      .pipe(map((results) => results));
  }

  stop(id: any) {
    return this.http
      .get(
        this.url +
          'stop?user_id=' +
          localStorage.getItem('user_id') +
          '&detail_id=' +
          id +
          '&lid=' +
          localStorage.getItem('lang_id')
      )
      .pipe(map((results) => results));
  }

  customCart(data: any) {
    return this.http
      .post(this.url + 'customCart', data)
      .pipe(map((results) => results));
  }

  review(data: any) {
    return this.http
      .post(this.url + 'review', data)
      .pipe(map((results) => results));
  }

  search(q: any) {
    return this.http
      .get(
        this.url + 'search?q=' + q + '&lid=' + localStorage.getItem('lang_id')
      )
      .pipe(map((results) => results));
  }

  language() {
    return this.http.get(this.url + 'language').pipe(map((results) => results));
  }

  page() {
    return this.http
      .get(this.url + 'page?lid=' + localStorage.getItem('lang_id'))
      .pipe(map((results) => results));
  }

  contact(data: any) {
    return this.http
      .post(this.url + 'contact', data)
      .pipe(map((results) => results));
  }

  getApiUrl() {
    return this.url;
  }
}
