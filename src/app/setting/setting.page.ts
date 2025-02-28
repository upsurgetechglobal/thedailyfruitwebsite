import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SettingPage implements OnInit {
data:any;
hasClick = false;

  constructor(public server : ServerService,public otherService : OtherService) {

    const userData = localStorage.getItem('user_data');
  
    if(userData !== null) 
    {
      this.data = JSON.parse(userData);
    }

  }

  ngOnInit() 
  {
  }
  
  async updateData(data:any)
  {
    this.hasClick = true;

    this.server.updateData(data).subscribe((response:any) => {
      
      if(response.msg == "done")
      {
        this.otherService.toast("Account setting updated successfully.");

        localStorage.setItem("user_data",JSON.stringify(response.user));

        this.otherService.redirect("account");
      }
      else
      {
        this.otherService.toast(response.error);
      }
      
      });
  }
}
