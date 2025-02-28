import { Component, OnInit,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ForgotPage implements OnInit {

  setting:any;
  hasClick = false;
  text:any;
  isMobile: boolean = false;


  constructor(public server : ServerService,public otherService : OtherService) {
    
    this.otherService.statusBar("#ffffff",2);


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

  forgot(data:any)
  {
    if(this.setting.verify_type == 1 || this.setting.verify_type == 2 && data.phone.length == 0)
    {
      return this.otherService.toast(this.text.correct_detail);
    }
    else if(data.email.length == 0)
    {
      return this.otherService.toast(this.text.correct_detail);
    }

    this.hasClick = true;

    this.server.forgot(data).subscribe((response:any) => {

    this.hasClick = false;

    if(response.msg != "done")
    {
      this.otherService.toast(response.error);
    }
    else
    {
      localStorage.setItem('user_res',JSON.stringify(response));

      this.otherService.redirect("otp");
    }

    });

    return;
  }

}
