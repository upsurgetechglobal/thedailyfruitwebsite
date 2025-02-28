import { Component, OnInit,ViewChild,ElementRef,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ServerService } from '../service/server.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class SearchPage implements OnInit {
  @ViewChild('searchBar', { static: false }) searchBar:any;

  cates:any;
  show = false;
  data:any;
  q:any;
  text:any;
  isMobile: boolean = false;


  constructor(public server : ServerService) { 

    const cateData = localStorage.getItem('cates');
    
    if (cateData !== null) 
    {
      this.cates = JSON.parse(cateData);
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

  ionViewDidEnter() 
  {
    this.searchBar.setFocus();

    this.data = [];
  }

  ngOnInit() {
  }

  async search(e:any)
  {
    
    this.q = e.detail.value;

    if(e.detail.value.length > 2)
    {
      this.show = true;

      this.server.search(e.detail.value).subscribe((response:any) => {
      
      this.data = response.data;

      this.show = false;

      });
    }
  }


}
