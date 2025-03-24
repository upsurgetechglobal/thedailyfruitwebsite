import { Component, HostListener, ViewChild } from '@angular/core';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
import { IonContent, ModalController } from '@ionic/angular';
import { FeedbackPage } from '../feedback/feedback.page';
import { DeliveryLocationPage } from '../delivery-location/delivery-location.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  data: any;
  hasClick = false;
  admin: any;
  address: any;
  text: any;
  isMobile: boolean = false;
  allItem: any = [];
  type: any = 2;
  cart_no: any;
  days: any = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  showScrollTopButton = false;
  @ViewChild('content', { static: false }) content: any;
  constructor(
    public server: ServerService,
    public otherService: OtherService,
    private modalCtrl: ModalController,
    private router: Router,
  ) {
    this.address = localStorage.getItem('current_address')
      ? localStorage.getItem('current_address')
      : 'Civil Lines, New Delhi';

    const text = localStorage.getItem('app_lang');

    if (text !== null) {
      this.text = JSON.parse(text);
      this.text = this.text.text;
      // this.text.menu_sub = 'My Orders'

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
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }

  ionViewWillEnter() {
    this.otherService.statusBar('#304b58', 1);
  }
  onScroll(event: any) {
    this.showScrollTopButton = event.detail.scrollTop > 300; // Show after scrolling 300px
  }

  scrollToTop() {
    this.content.scrollToTop(500); // Scroll to top in 500ms
  }

  ngOnInit() {
    // if(!localStorage.getItem('user_location')){
    //   this.openLocationModal();
    // }
    this.loadData();
    this.highlyRecommended();
  }

  // async openLocationModal() {
  //   const modal = await this.modalCtrl.create({
  //     component: DeliveryLocationPage,
  //     animated: true,
  //     cssClass: 'custom-modal', // Add a custom class here
  //   });
  //   await modal.present();
  
  //   const { data } = await modal.onWillDismiss();
  //   localStorage.setItem('user_location',data.name)
  // }
  

  async loadData() {
    this.server.homepage().subscribe((response: any) => {
      this.data = response.data;
      console.log(' this.data', this.data)
    // this.data = this.sample_data;
    localStorage.setItem('cates', JSON.stringify(this.data.cate));
    localStorage.setItem('admin_setting', JSON.stringify(this.data.admin));
    });
  }
  async add_to_cart(item: any) {
    if(item.subscribed_item){
      item.qty = 1
      localStorage.removeItem('subscribed_items')
      localStorage.setItem('subscribed_items',JSON.stringify(item))
      this.router.navigate(['/subscribed-cart'], { replaceUrl: true });
    }else{
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

  async highlyRecommended() {
    this.server.item({store_id:1,cat_id:0}).subscribe((response:any) => {
    localStorage.setItem('admin_setting', JSON.stringify(response.data.admin));
    localStorage.setItem('app_lang', JSON.stringify(response.data.lang));
    localStorage.setItem('lang_id', '0');
    this.text = response.data.lang.text;
    this.allItem = response.data;
    });
  }
  detail(item: any) {
    this.server.item({store_id:1}).subscribe((response:any) => {
      localStorage.setItem('store_data', JSON.stringify(response.data.store));
    })
    localStorage.setItem('item_data', JSON.stringify(item));
    localStorage.setItem('item_type', this.type);

    return this.otherService.redirect('detail');
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

  // async setItem()
  // {
  //   for(var i =0;i<this.data.item.length;i++)
  //     {
  //       if(this.chkFilter(this.data.item[i]))
  //       {
  //         this.allItem.push(this.data.item[i]);
  //       }
  //     }
  // }

  async bannerLink(banner: any) {
    if (banner.link_to == 2) {
      window.open(banner.link, '_blank');
    } else {
      if (!banner.link) {
        this.otherService.redirect('view/all');
      } else {
        this.otherService.redirect('item/' + banner.link);
      }
    }
  }

  async handleRefresh(event: any) {
    this.loadData();

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
