import { Component, OnInit,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PasswordPage implements OnInit {

  user_id:any;
  hasClick = false;
  isMobile: boolean = false;

  constructor(public server : ServerService,public otherService : OtherService) {
    
    this.user_id = localStorage.getItem("temp_user_id");

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
    this.otherService.statusBar("#ffffff",1); 
  }

  async reset(data:any)
  {
    if(data.password.length == 0 || data.password != data.c_password)
    {
      return this.otherService.toast("Confirm password not match");
    }

    this.hasClick = true;

    this.server.resetPassword(data,this.user_id).subscribe((response:any) => {
    
      this.hasClick = false;

      this.otherService.toast("Password changed successfully");

      this.otherService.redirect("login","root");

    });

    return;
  }

}
