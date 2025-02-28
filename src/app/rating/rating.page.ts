import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,NavController,LoadingController } from '@ionic/angular';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
import { register } from 'swiper/element/bundle';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

register();

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
  
})
export class RatingPage implements OnInit {
@ViewChild('content',{static : false}) private content: any;

  type:any;
  id:any;
  rating:any;
  comment:any;

  srating:any;
  scomment:any;
  hasClick = false;
  name:any;
  sname:any;

  constructor(public server : ServerService,private route: ActivatedRoute,public otherService : OtherService) {
  
  	this.type  = this.route.snapshot.paramMap.get('type');
  	this.id    = this.route.snapshot.paramMap.get('id');
  	this.name  = this.route.snapshot.paramMap.get('name');
  	this.sname = this.route.snapshot.paramMap.get('sname');

 }

  ngOnInit()
  { 
  }

  async addReview()
  {
    if(!this.rating || !this.comment)
    {
      return this.otherService.toast("Please enter correct detail");
    }
    else if(this.type > 0)
    {
      if(!this.srating || !this.scomment)
      {
        return this.otherService.toast("Please enter correct detail"); 
      }
    }
    else
    {
      this.hasClick = true;

      const allData = {user_id : localStorage.getItem('user_id'),item_id : this.id,star : this.rating,comment : this.comment,srating : this.srating, scomment : this.scomment,store_id : this.type}

      this.server.review(allData).subscribe((response:any) => {
      
      this.otherService.toast("Thanks for your valueable feedback.");

      this.otherService.redirect('subscription');

      this.hasClick = false;
      
      });
    }

    return;
  }

  set(rating:any)
  {
    this.rating = rating;
  }

  sset(rating:any)
  {
    this.srating = rating;
  }
  
}
