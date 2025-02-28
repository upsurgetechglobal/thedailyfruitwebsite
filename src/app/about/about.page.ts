import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AboutPage implements OnInit {

  data:any;
  fakeData = [1,2,3,4,5,6,7,8,9];
  text:any;
  
  constructor(public server : ServerService,public otherService : OtherService) { 
  
    this.otherService.statusBar("#ffffff",2);

    const text = localStorage.getItem('app_lang');
    
    if(text !== null) 
    {
      this.text =  JSON.parse(text);
      this.text = this.text.text;
    }

  }

  ngOnInit() {
  }

  ionViewDidEnter(){
   
    this.loadData();

  }

  async loadData()
  {
    this.server.page().subscribe((response:any) => {
      
      this.data  = response.data;
      
      });
  }

}
