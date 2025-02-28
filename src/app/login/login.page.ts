import { Component, OnInit,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class LoginPage implements OnInit {

  hasClick:any = false;
  setting:any;
  text:any;
  email:any = "user@gmail.com";
  password:any = "123456";
  isMobile: boolean = false;

  constructor(public server : ServerService,public otherService : OtherService) {

    this.otherService.statusBar("#ffc927",2);

    const setting = localStorage.getItem('admin_setting');
    
    if (setting !== null) 
    {
      this.setting = JSON.parse(setting);
    }

    const text = localStorage.getItem('app_lang');
    
    if(text !== null) 
    {
      this.text =  JSON.parse(text);
      this.text = this.text.text;
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

  ngOnInit() {
  }

  async login(data:any)
  {
    if(data.password.length == 0)
    {
      return this.otherService.toast(this.text.correct_detail);
    }

    this.hasClick = true;

    this.server.login(data).subscribe((response:any) => {
      // const mockResponse = {
      //   user: {
      //     id: '410e7a8e201-3375-4ceb-a9c8-e138e5128171',
      //     email: 'dailyfruit@gmail.com',
      //     name: 'Daily Fruit',
      //   },
      //   msg: 'done',
      //   error: 'Invalid Credentials',
      // };

    this.hasClick = false;

    if(response.msg != "done")
    {
      this.otherService.toast(response.error);
    }
    else
    {
      localStorage.setItem('user_id',response.user.id);

      localStorage.setItem('user_data', JSON.stringify(response.user));

      this.otherService.toast(this.text.logged_in);

      if(localStorage.getItem('cart_no') && localStorage.getItem('cart_no') != undefined)
      {
        this.otherService.redirect("cart","root");
      }
      else
      {
        this.otherService.redirect("account","root");
      }
    }

    });

    return;
  }
}
