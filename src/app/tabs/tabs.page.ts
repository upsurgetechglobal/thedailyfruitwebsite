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
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: false,
  // imports: [IonicModule, CommonModule, FormsModule, RouterLink],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsPage implements OnInit {
  isMobile: boolean = false;
  dir = 'ltr';

  constructor() {}

  ngOnInit() {}
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }
}
