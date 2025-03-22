import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ServerService } from '../service/server.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavPage implements OnInit {
  isMobile: boolean = false;
  dir = 'ltr';
  text: any;
  data: any;
  constructor(public server: ServerService) {}

  ngOnInit() {}
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const text = localStorage.getItem('app_lang');

    if (text !== null) {
      this.text = JSON.parse(text);
      this.text = this.text.text;
      // this.text.menu_sub = 'My Orders'
    }
    this.checkScreenSize();
  }
  async loadData() {
    this.server.homepage().subscribe((response: any) => {
      this.data = response.data;
      console.log(' this.data', this.data);
      // this.data = this.sample_data;
      localStorage.setItem('cates', JSON.stringify(this.data.cate));
      localStorage.setItem('admin_setting', JSON.stringify(this.data.admin));
    });
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }
}
