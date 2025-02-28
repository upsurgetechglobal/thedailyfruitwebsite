import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-coustom',
  templateUrl: './coustom.page.html',
  styleUrls: ['./coustom.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CoustomPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
