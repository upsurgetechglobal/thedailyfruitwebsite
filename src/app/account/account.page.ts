import { Component, OnInit,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class AccountPage implements OnInit {
data:any;
fakeData:any = [1,2,3,4,5,6];
text:any;
isMobile: boolean = false;


  constructor(public server : ServerService,public otherService : OtherService) { 

    const text = localStorage.getItem('app_lang');
    
    if(text !== null) 
    {
      this.text =  JSON.parse(text);
      this.text = this.text.text;
      // this.text.subscription = 'My Orders'
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

  ngOnInit() 
  {
  }

  ionViewDidEnter()
  {
    this.otherService.statusBar("#ffffff",2);

    this.loadData(); 
  }

  async loadData()
  {
    this.server.account().subscribe((response:any) => {
      
      this.data   = response.data;
      console.log(this.data)
      
      });
  }

  async logout()
  {
    this.otherService.confirm() .then(res => {
      if (res === 'ok') 
      {
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_data");
        this.otherService.triggerLoadData.emit();
        this.otherService.redirect("tabs/home");     
      }
    });
  }
  
  async deleteAccount()
  {
    this.otherService.confirm() .then(res => {
      if (res === 'ok') 
      {
        this.server.deleteAccount().subscribe((response:any) => {
      
          this.data = response.data;

          this.otherService.toast(this.text.account_delete);

          localStorage.removeItem("user_id");
          localStorage.removeItem("user_data");

          this.otherService.redirect("welcome");     
          
          });   
      }
    });
  }

  async shareApp()
  {
    await Share.share({
      title: '',
      text: this.data.user.rcode+' '+this.text.ref_code,
      dialogTitle: this.text.ref_title,
    });
  }
}
