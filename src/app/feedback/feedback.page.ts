import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,NavParams } from '@ionic/angular';
import { OtherService } from '../service/other/other.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FeedbackPage implements OnInit {

  data:any;
  text:any;
  
  constructor(public otherService : OtherService,public navParams: NavParams) {
  
    this.data  = navParams.get('data');

    const text = localStorage.getItem('app_lang');
    
    if(text !== null) 
    {
      this.text =  JSON.parse(text);
      this.text = this.text.text;
    }
   }

  ngOnInit() {
  }

  async close(data:any = [])
  {
    this.otherService.closeModel(data);
  }

  roundRating(rating: number): number {
    return Math.round(rating);
  }
}
