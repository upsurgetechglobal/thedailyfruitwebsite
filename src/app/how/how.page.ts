import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-how',
  templateUrl: './how.page.html',
  styleUrls: ['./how.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HowPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
