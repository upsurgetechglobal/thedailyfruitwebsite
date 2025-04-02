import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,NavParams } from '@ionic/angular';
import { OtherService } from '../service/other/other.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OfferPage implements OnInit {

  data:any;
  text:any;
  type:any;

  constructor(public otherService : OtherService,public navParams: NavParams) { 

    this.data  = navParams.get('data');
    this.type = navParams.get('type');
    console.log('this.type',this.type);
    

    const text = localStorage.getItem('app_lang');
    
    if(text !== null) 
    {
      this.text =  JSON.parse(text);
      this.text = this.text.text;
    }

  }

  ngOnInit() {
  }

  async close(data:any = null)
  {
    this.otherService.closeModel(data);
  }

  async setOffer(offer:any)
  {
    this.otherService.closeModel(offer);
  }

}
