import { Component, HostListener } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { OtherService } from './service/other/other.service';
// import OneSignal from 'onesignal-cordova-plugin';
// import { OneSignal } from '@ionic-native/onesignal/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  user: any;
  text: any;
  setting: any;
  dir = 'ltr';
  isMobile: boolean = false;

  constructor(
    private platform: Platform,
    public otherService: OtherService,
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
