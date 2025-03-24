import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
import { register } from 'swiper/element/bundle';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FeedbackPage } from '../feedback/feedback.page';
import { AddressPage } from '../address/address.page';
import { OfferPage } from '../offer/offer.page';
import { PaymentPage } from '../payment/payment.page';

register();

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ItemPage implements OnInit {
  @ViewChild('content', { static: false }) private content: any;

  data: any;
  admin: any;
  fakeData = [1, 2, 3, 4, 5, 6];
  cat_id: any;
  type: any = 2;
  text: any;
  isMobile: boolean = false;
  allItem: any = [];
  filteredItems: any = [];

  selectedItms: any = [];
  savedAddress: any;
  address: any;
  cal: any;
  sub_time: any;
  start_date: any;
  checkout_data: any;
  total = 0;
  payble_amount = 0;
  offer: any;
  save: any;
  hasClick = false;
  show = true;
  categories_list: any;

  categoryItemsMap: { [key: number]: number[] } = {
    1: [1, 2,6],
    2: [5],
    3: [3, 4],
  };
  cart_no: any;
  days: any = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  cratData:any;

  constructor(
    public server: ServerService,
    private route: ActivatedRoute,
    private router: Router,
    public otherService: OtherService,
    private modalCtrl: ModalController
  ) {
    this.otherService.statusBar('#ffffff', 2);

    this.cat_id = this.route.snapshot.paramMap.get('id');

    const text = localStorage.getItem('app_lang');

    if (text !== null) {
      this.text = JSON.parse(text);
      this.text = this.text.text;
    }
    //create or set cart no
    if (
      localStorage.getItem('cart_no') == 'null' ||
      localStorage.getItem('cart_no') == undefined
    ) {
      this.cart_no = Math.floor(Math.random() * 2000000000) + 1;
      localStorage.setItem('cart_no', this.cart_no);
    } else {
      this.cart_no = localStorage.getItem('cart_no');
    }
    this.checkScreenSize();

    if (localStorage.getItem('lang_id') == undefined) {
      localStorage.setItem('lang_id', '0');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.loadData();
   
  }
  async loadData() {
    this.server.item({ store_id: 1, cat_id: this.cat_id }).subscribe((response: any) => {
      const data = response.data;
  
      // Store data in localStorage
      localStorage.setItem('admin_setting', JSON.stringify(data.admin));
      localStorage.setItem('app_lang', JSON.stringify(data.lang));
      localStorage.setItem('lang_id', '0');
  
      // Set local variables
      this.text = data.lang.text;
      this.data = data;
      this.filteredItems = data.item;
  
      // Update cart status for items
      // this.updateCartStatus();
  
      // Load other necessary data
      const selectedItms = localStorage.getItem('selectedItms');
      this.selectedItms = selectedItms ? JSON.parse(selectedItms) : [];
      if (this.selectedItms.length > 0) {
        this.CalculateTotal();
      }
  
      this.loadCategoriesData();
      this.getSavedAddress();
      this.setItem();
      this.selectProducts(this.cat_id); // optional, based on your logic
    });
  }
  
  async selectProducts(cat_id: any) {
    this.cat_id = cat_id;
    this.server.item({ store_id: 1, cat_id: cat_id }).subscribe((response: any) => {
      this.filteredItems = response.data.item;
      console.log('Filtered Items with cart status:', this.filteredItems);
      // this.updateCartStatus();
    });
  }
  
  // Reusable helper method
  // private updateCartStatus() {
  //   this.server.getCart().subscribe((response: any) => {
  //     this.cratData = response.data;
  //     this.filteredItems.forEach((item: any) => {
  //       const cartItem = this.cratData.find((cart: any) => cart.item_id === item.id);
  //       item.cart_added = !!cartItem;
  //       item.cart_id = cartItem ? cartItem.id : null;
  //       item.qty = cartItem ? cartItem.qty : 1;
  //     });
  //     console.log('Filtered Items with cart status:', this.filteredItems);
  //   });
  // }
  

  async loadCategoriesData() {
    this.server.homepage().subscribe((response: any) => {
      this.categories_list = response.data.cate;
    });
  }

  getSavedAddress() {
    this.server.checkoutData().subscribe((response: any) => {
      this.checkout_data = response.data;
      this.savedAddress = this.checkout_data.address;
    });
  }

  async setItem() {
    const uniqueItems = new Map(); 
    for (const item of this.data.item) {
      if (this.chkFilter(item)) {
        uniqueItems.set(item.id, item); 
      }
    }
    this.allItem = Array.from(uniqueItems.values()).map((product: any) => ({
      ...product,
      subscribed_item: /fruit/i.test(product.name) 
    }));
    console.log( this.allItem)
  }
  

  async ic() {
    this.allItem = [];

    this.setItem();
  }

  async goBack() {
    return this.otherService.goBack();
  }

  chkFilter(item: any) {
    if (this.type == 1) {
      return true;
    } else if (this.type == 2) {
      return item.breakfast == 1 ? true : false;
    } else if (this.type == 3) {
      return item.lunch == 1 ? true : false;
    } else if (this.type == 4) {
      return item.dinner == 1 ? true : false;
    }

    return true;
  }

  async add_to_cart(item: any) {
    if(item.subscribed_item){
      item.qty = 1
      localStorage.setItem('subscribed_items',JSON.stringify(item))
      this.router.navigate(['/subscribed-cart'], { replaceUrl: true });
    }else{
      item.cart_added = true;
      item.qty = 1;
    this.hasClick = true;
    var allData = {
      cart_no: this.cart_no,
      item_id: item.id,
      price: item.price,
      item_type: this.type,
      qty: 1,
      store_id: item.store_id,
      days: this.days,
    };

    this.server.add_to_cart(allData).subscribe((response: any) => {
      this.hasClick = false;
      this.otherService.triggerLoadData.emit();
      this.otherService.toast(this.text.added);
    });
  }
  }

  detail(item: any) {
    const existingItem = this.selectedItms.find(
      (res: any) => res.id === item.id
    );
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.selected_price =
        Number(item.price) * Number(existingItem.quantity);
    } else {
      item.quantity = 1;
      item.selected_price = item.price;
      this.selectedItms.push(item);
    }
    // console.log('this.selectedItms',this.selectedItms)
    this.CalculateTotal();

    // localStorage.setItem('item_data', JSON.stringify(item));
    // localStorage.setItem('store_data', JSON.stringify(this.data.store));
    // localStorage.setItem('item_type', this.type);

    // return this.otherService.redirect('detail');
  }
  increment(item: any) {
    if (item.qty < 10) {
    const existingItem = this.filteredItems.find(
      (res: any) => res.id === item.id
    );
    existingItem.qty += 1;
    this.otherService.triggerLoadData.emit();
    this.addToCart(item,'increment')
  }
  }

  decrement(item: any) {
    if (item.qty > 1) {
      const existingItem = this.filteredItems.find(
        (res: any) => res.id === item.id
      );
      existingItem.qty -= 1;
      this.otherService.triggerLoadData.emit();
      this.addToCart(item,'decrement')
    }else{
      this.removefromcart(item)
    }
  }
  async removefromcart(item:any)
  {
    // this.otherService.confirm() .then(res => {
    //   if (res === 'ok') 
    //   {
        this.server.getCart(item.cart_id).subscribe((response:any) => {
          item.cart_added = false;
          this.otherService.triggerLoadData.emit();
          this.otherService.toast(this.text.removed);
          
          });       
    //   }
    // });
  }
  addToCart(item:any,mode:any){
    var allData = {
      cart_no: this.cart_no,
      item_id: item.id,
      mode:mode,
      qty:1,
      store_id: item.store_id
    };

    this.server.add_to_cart(allData).subscribe((response: any) => {
      this.hasClick = false;
      // this.otherService.triggerLoadData.emit();
      // this.otherService.toast(this.text.added);
    });
  }

  CalculateTotal() {
    this.total = this.selectedItms.reduce(
      (sum: number, res: any) => sum + (Number(res.selected_price) || 0),
      0
    );
    localStorage.setItem('selectedItms', JSON.stringify(this.selectedItms));
  }

  removeItem(item: any) {
    this.selectedItms = this.selectedItms.filter((res: { id: any }) => {
      return res.id != item.id;
    });
    this.CalculateTotal();
  }

  async getAddress() {
    const allData = { data: this.savedAddress, store_id: this.data.store.id };

    const modal = await this.modalCtrl.create({
      component: AddressPage,
      animated: true,
      mode: 'ios',
      componentProps: allData,
    });

    modal.onDidDismiss().then((data) => {
      console.log(data);

      if (data.data.id) {
        this.address = data.data;
      }
    });

    return await modal.present();
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
    };

    this.server.getAmount(allData).subscribe((response: any) => {
      this.cal = response;

      // this.total = this.cal.total;

      this.otherService.hideLoading();

      console.log(this.cal.summery);
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
      total: this.total,
      discount: this.save,
      store_id: this.checkout_data.store.id,
      notes:
        localStorage.getItem('order_notes') &&
        localStorage.getItem('order_notes') != 'undefined'
          ? localStorage.getItem('order_notes')
          : null,
    };

    console.log(allData);

    // this.server.placeOrder(allData).subscribe((response: any) => {
    //   if (response.done == true) {
    //     this.show = false;

    //     localStorage.removeItem('order_notes');

    //     this.otherService.redirect('success');
    //   } else {
    //     this.otherService.toast(response.error);
    //   }

    //   this.hasClick = false;
    // });
  }

  custom() {
    localStorage.setItem('custom_data', JSON.stringify(this.data.custom));
    localStorage.setItem('store_data', JSON.stringify(this.data.store));

    return this.otherService.redirect('custom');
  }

  async openModel(item: any, type: any) {
    const modal = await this.modalCtrl.create({
      component: FeedbackPage,
      animated: true,
      mode: 'ios',
      componentProps: {
        data: { item: item, type: type },
      },
    });

    modal.onDidDismiss().then((data) => {});

    return await modal.present();
  }
}
