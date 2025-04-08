import { EventEmitter, Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import {
  AlertController,
  LoadingController,
  ModalController,
  NavController,
  ToastController,
} from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class OtherService {
  triggerLoadData: EventEmitter<void> = new EventEmitter<void>();
  triggerAddressLoadData: EventEmitter<void> = new EventEmitter<void>();
  triggerVacationData: EventEmitter<void> = new EventEmitter<void>();
  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private nav: NavController,
    public toastController: ToastController
  ) {}

  async showLoading() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      cssClass: 'loader-css-class',
      showBackdrop: false,
    });

    await loading.present();
  }

  async hideLoading() {
    return this.loadingController.dismiss();
  }

  async redirectWithDelay(url: any, time = 1000) {
    setTimeout(() => {
      return this.nav.navigateForward('/' + url);
    }, time);
  }

  async redirect(url: any, type: any = false) {
    if (type) {
      return this.nav.navigateRoot('/' + url);
    } else {
      return this.nav.navigateForward('/' + url);
    }
  }

  async goBack() {
    this.nav.back();
  }

  async toast(txt: any) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000,
      position: 'bottom',
      mode: 'ios',
      color: 'dark',
      cssClass: 'custom-toast' // Custom class for styling
    });
  
    await toast.present();
  }

  async confirm(): Promise<any> {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: 'Are you sure?',
        cssClass: 'custom-alert', // Updated class name
        mode: 'ios',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'dark',
            handler: (cancel) => {
              resolve('cancel');
            },
          },
          {
            text: 'Yes Sure',
            handler: (ok) => {
              resolve('ok');
            },
          },
        ],
      });
      alert.present();
    });
  }

  async confirmPernissions(header: string, message: string): Promise<any> {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: message,
        cssClass: 'custom-alert', // Updated class name
        mode: 'ios',
        buttons: [
          {
            text: 'Close',
            role: 'cancel',
            cssClass: 'dark',
            handler: (cancel) => {
              resolve('cancel');
            },
          },
          
        ],
      });
      await alert.present();
    });
  }

  async vacationModeConfirm(header: any, message: any): Promise<any> {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: header,
        cssClass: 'custom-alert', // Updated class name
        mode: 'ios',
        message: message,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'dark',
            handler: () => {
              resolve('cancel');
            },
          },
          {
            text: 'Yes Sure',
            handler: () => {
              resolve('ok');
            },
          },
        ],
      });
      alert.present();
    });
  }
  


  formValidation(data: any) {
    let email_error: any;
    let phone_error: any;
    let password_error: any;
    let name_error: any;

    if (data.name.length < 2 || data.phone.length > 20) {
      name_error = 'Please enter valid name';
    }

    if (!this.validateEmail(data.email)) {
      email_error = 'Please enter valid email';
    }

    if (data.phone.length < 8 || data.phone.length > 10) {
      phone_error = 'Please enter valid phone number';
    }

    if (data.password.length < 6) {
      password_error = 'Password must be at least 6 characters';
    }else{
      const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    
    if (!data.password.match(passwordPattern)) {
      password_error = "Password must contain at least one uppercase letter, one number, and one special character.";
    } else {
      password_error = '';
    }
    }

    return {
      email: email_error,
      phone: phone_error,
      password: password_error,
      name: name_error,
    };
  }

  validateEmail(email: any) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  async openModal(page: any, parm: any = {}) {
    const modal = await this.modalCtrl.create({
      component: page,
      componentProps: parm,
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    if (data) {
      return data;
    }
  }

  async closeModel(data: any) {
    await this.modalCtrl.dismiss(data);
  }

  async alert(txt: any) {
    const alert = await this.alertController.create({
      message: txt,
      buttons: ['OK'],
    });

    await alert.present();
  }

  // async statusBar(color: any, style: any = 1) {
  //   StatusBar.setBackgroundColor({ color: color });

  //   if (style == 1) {
  //     StatusBar.setStyle({ style: Style.Dark });
  //   } else {
  //     StatusBar.setStyle({ style: Style.Light });
  //   }
  // }
  async statusBar(color: string, style: number = 1) {
    const platform = Capacitor.getPlatform();

    if (platform === 'ios' || platform === 'android') {
        StatusBar.setBackgroundColor({ color });

        if (style === 1) {
            await StatusBar.setStyle({ style: Style.Dark });
        } else {
            await StatusBar.setStyle({ style: Style.Light });
        }
    } else {
        console.warn("StatusBar plugin is not implemented on web.");
    }
}

  async getLang() {
    const text = localStorage.getItem('app_lang');

    if (text !== null) {
      return JSON.parse(text);
    }
  }
}
