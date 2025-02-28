import { Component, OnInit,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
import { IonModal } from '@ionic/angular';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.page.html',
  styleUrls: ['./dates.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DatesPage implements OnInit {

@ViewChild(IonModal) modal!: IonModal;

data:any;
fakeData:any = [1,2,3,4,5,6];
array:any = [];
hasClick = false;
text:any;

  constructor(private photoViewer: PhotoViewer,public server : ServerService,public otherService : OtherService) {

    const data = localStorage.getItem('sub_data');
  
    if(data !== null) 
    {
      this.data = JSON.parse(data);

      console.log(this.data);
    }

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

  async mark()
  {
    this.otherService.confirm() .then(res => {
      if (res === 'ok') 
      {
        this.hasClick = true;

        const allData = { id : this.array,user_id : localStorage.getItem('user_id') }

        this.server.mark(allData).subscribe((response:any) => {
        
        this.hasClick = false;

        this.otherService.toast("Delivery dates updated successfully. "+response.data+" credited in your wallet.");

        this.otherService.redirect('subscription');

        });
      }
    });
  }

  async undo(id:any)
  {
    this.otherService.confirm() .then(res => {
      if (res === 'ok') 
      {
        const allData = { id : this.array,user_id : localStorage.getItem('user_id') }

        this.otherService.showLoading();

        this.server.undo(id).subscribe((response:any) => {
        
        this.otherService.hideLoading();

        if(response.msg == "done")
        {
          this.otherService.toast("Delivery dates updated successfully. "+response.data+" debited from your wallet.");

          this.otherService.redirect('subscription');
        }
        else
        {
          this.otherService.toast(response.error);
        }

        });
      }
    });
  }

  setValue(e:any,id:any)
  {
    if(e.detail.checked == true)
    {
      this.array.push(id);
    }
    else
    {
      let index = this.array.indexOf(id);
      if (index !== -1) {
        this.array.splice(index, 1);
      }
    }
    
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  async stop()
  {
    this.otherService.confirm() .then(res => {
      if (res === 'ok') 
      {
        this.hasClick = true;

        this.server.stop(this.data.detail_id).subscribe((response:any) => {
        
        this.hasClick = false;
        
        this.cancel();

        this.otherService.toast(this.text.sub_stop);

        this.otherService.redirect('account');

        });
      }
    });
  }

  async viewimg(img:any)
  {
    this.photoViewer.show(img);
  }
}
