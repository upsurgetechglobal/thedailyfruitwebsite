import { Component, HostListener, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { OtherService } from './service/other/other.service';
import { ServerService } from './service/server.service';
import { Router } from '@angular/router';
// import OneSignal from 'onesignal-cordova-plugin';
// import { OneSignal } from '@ionic-native/onesignal/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  user: any;
  text: any;
  setting: any;
  dir = 'ltr';
  isMobile: boolean = false;
  data:any;
  user_data:any;

  constructor(
    private platform: Platform,
    public otherService: OtherService,
     public server: ServerService,
     private router:Router
    // private oneSignal: OneSignal
  ) {
    const userData = localStorage.getItem('user_data');

    this.checkScreenSize();

    if (userData !== null) {
      this.user = JSON.parse(userData);
    }

    const text = localStorage.getItem('app_lang');
    if (text !== null) {
      this.text = JSON.parse(text);
      this.dir = this.text.type == '1' ? 'rtl' : 'ltr';
      this.text = this.text.text;
    }

    const setting = localStorage.getItem('setting');

    if (setting !== null) {
      this.setting = JSON.parse(setting);
    }
  
    // this.initializeApp();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit(): void {
   
    this.otherService.triggerLoadData.subscribe(() => {
      const user_id = localStorage.getItem('user_id');
      this.loadData(); 
      if(user_id){
        this.loadUserData();
      }else{
        this.user_data = null
      }
    });
    this.loadData();
    this.loadUserData();
     
  }
  async loadUserData()
  {
    this.server.account().subscribe((response:any) => {
      
      this.user_data   = response.data;
      console.log(this.user_data)
      
      });
  }
  userAccount() {
    if (this.user_data == undefined && this.user_data?.user   == undefined) {
      this.router.navigate(["login"]);
    } else {
      this.router.navigate(["/tabs/account"]);
    }
  }
  
  async loadData() {
    this.server.homepage().subscribe((response: any) => {
      this.data = response.data;
      console.log(' this.data', this.data)
    localStorage.setItem('cates', JSON.stringify(this.data.cate));
    localStorage.setItem('admin_setting', JSON.stringify(this.data.admin));
    });
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.setBackgroundColor({ color: '#ffffff' });
      StatusBar.setStyle({ style: Style.Dark });
    });
  }

  OneSignalInit(): void {
    console.log('Initializing OneSignal');
  
    // this.oneSignal.startInit('YOUR_APP_ID', 'YOUR_GOOGLE_PROJECT_NUMBER');
    // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
  
    // this.oneSignal.handleNotificationReceived().subscribe((notification) => {
    //   console.log('Notification received:', notification);
    // });
  
    // this.oneSignal.handleNotificationOpened().subscribe((notification) => {
    //   console.log('Notification opened:', notification);
    // });
  
    // this.oneSignal.endInit();
  
    // if (
    //   localStorage.getItem('store_user_id') &&
    //   localStorage.getItem('store_user_id') !== undefined
    // ) {
    //   this.oneSignal.sendTags({ user_id: localStorage.getItem('store_user_id') });
    // }
  }
  

  
}
