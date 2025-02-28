import { Component, OnInit,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SignupPage implements OnInit {

  setting:any;
  password_error:any;
  email_error:any;
  phone_error:any;
  name_error:any;
  hasClick = false;
  term = false;
  text:any;
  isMobile: boolean = false;
  
  constructor(public server : ServerService,public otherService : OtherService) {

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

  ionViewWillEnter()
  {
    this.otherService.statusBar("#ffffff",1); 
  }

  ngOnInit() {
  }

  async signup(data:any)
  {
     let error           = this.otherService.formValidation(data);
     this.email_error    = error.email;
     this.phone_error    = error.phone;
     this.password_error = error.password;
     this.name_error     = error.name;
     
     if(!this.term)
     {
       return this.otherService.toast(this.text.agree_term);
     }

     if(!this.email_error && !this.phone_error && !this.password_error && !this.name_error)
     {
       this.hasClick = true;

       this.server.signup(data).subscribe((response:any) => {

        this.hasClick = false;

        if(response.msg != "done")
        {
          this.otherService.toast(response.error);
        }
        else
        {

          if(response.otp > 0)
          {
            localStorage.setItem('user_res',JSON.stringify(response));

            this.otherService.redirect("otp");
          }
          else
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
        }

       });
     }

  }

  termAgree()
  {
    this.term = this.term == true ? false : true;
  }
}
