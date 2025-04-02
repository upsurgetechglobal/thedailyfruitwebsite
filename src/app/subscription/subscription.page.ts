import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class SubscriptionPage implements OnInit {
data:any;
fakeData:any = [1,2,3,4,5,6];
text:any;

  constructor(public server : ServerService,public otherService : OtherService) {

    const text = localStorage.getItem('app_lang');
    
    if(text !== null) 
    {
      this.text =  JSON.parse(text);
      this.text = this.text.text;
    }

   }

  ngOnInit() 
  {
  }

  ionViewDidEnter()
  {
    this.loadData(); 
  }

  async loadData()
  {
    this.server.subscription().subscribe((response:any) => {
      
      this.data   = response.data;

      console.log(this.data);
      
      });
  }

  async detail(data:any)
  {
    console.log(data)
    localStorage.setItem("sub_data",JSON.stringify(data));

    this.otherService.redirect("/dates");
  }

}
