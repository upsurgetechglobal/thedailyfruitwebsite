import { Component, OnInit,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OtpPage implements OnInit {

  OTP:any = '';
  res:any;
  title:any;
  desc:any;
  hasClick = false;
  text:any;
  isMobile: boolean = false;

  constructor(public server : ServerService,public otherService : OtherService) {
  
    const userRes = localStorage.getItem('user_res');
    
    if (userRes !== null) 
    {
      this.res = JSON.parse(userRes);
    }

    const text = localStorage.getItem('app_lang');
    
    if(text !== null) 
    {
      this.text =  JSON.parse(text);
      this.text = this.text.text;
    }

    this.title = this.res.codeSent == 3 ? this.text.verify_email : this.text.verify_phone;
    this.desc  = this.res.codeSent == 3 ? this.text.email_code_sent : this.text.phone_code_sent;

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

  ionViewWillEnter()
  {
    this.otherService.statusBar("#ffc927",2);
  }

  otpChange(e:any,next:any,prev:any)
  {
    if(e.target.value.length < 1 && prev)
    {
      prev.setFocus()
    }
    else if(next && e.target.value.length>0)
    {
      next.setFocus();
    }
    else
    {
     return 0;
    }
    
    return 0;
  }

  verify(data:any)
  {    
    if(!data.otp_1 || !data.otp_2 || !data.otp_3 || !data.otp_4)
    {
      return this.otherService.toast(this.text.valid_otp);
    }
    
    this.hasClick = true;

    this.server.verifyOtp(data,this.res.user.id).subscribe((response:any) => {
    
      this.hasClick = false;

      if(response.msg != "done")
      {
        this.otherService.toast(response.error);
      }
      else
      {
        if(this.res.user.status == 0)
        {
            localStorage.setItem('user_id',response.user.id);

            localStorage.setItem('user_data', JSON.stringify(response.user));

            this.otherService.toast(this.text.account_created);

            if(localStorage.getItem('cart_no') && localStorage.getItem('cart_no') != undefined)
            {
              this.otherService.redirect("cart","root");
            }
            else
            {
              this.otherService.redirect("account","root");
            }
        }
        else
        {
          localStorage.setItem('temp_user_id',response.user.id);

          this.otherService.redirect("password","root");
        }
      }

    });

    return;
  }

  resend()
  {
    this.hasClick = true;

    this.server.resendCode(this.res.user.id).subscribe((response:any) => {
    
    this.hasClick = false;

    this.otherService.toast(this.text.new_code_sent);
   
    });
  }

}
