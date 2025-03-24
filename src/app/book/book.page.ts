import { Component, OnInit,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,ModalController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
import { AddressPage } from '../address/address.page';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BookPage implements OnInit {
data:any;
fakeData:any = [1,2,3,4,6];
text:any;
isMobile: boolean = false;

  constructor(public server : ServerService,public otherService : OtherService,private modalCtrl: ModalController) { 

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

  ngOnInit() 
  {
    this.otherService.triggerAddressLoadData.subscribe(() => {
      this.loadData(); // ✅ Respond to event
    });
    this.loadData();
  }

  ionViewDidEnter()
  {
    this.loadData(); 
  }

  async loadData()
  {
    this.server.getAddress().subscribe((response:any) => {
      
      this.data   = response.data;
      
      });
  }

  async deleteAddress(id:any)
  {
    this.otherService.confirm() .then(res => {
      if (res === 'ok') 
      {
        this.otherService.showLoading();

        this.server.deleteAddress(id).subscribe((response:any) => {
      
          this.data = response.data;

          this.otherService.hideLoading();

          this.otherService.toast(this.text.address_removed);

          });   
      }
    });
  }

  async addNew()
  {
    const modal = await this.modalCtrl.create({
      component: AddressPage,
      animated:true,
      mode:'ios',
      componentProps: { addnew : true }

    });

   modal.onDidDismiss().then(data=>{
    
    console.log(data.data);

    if(data.data.all)
    {
      this.data = data.data.all;
    }

    })

    return await modal.present();

  }
}
