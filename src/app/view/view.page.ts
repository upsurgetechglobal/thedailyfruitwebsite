import { Component, HostListener, OnInit } from '@angular/core';
import { ServerService } from '../service/server.service';
import { OtherService } from '../service/other/other.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
  standalone: false, // Ensure this is present
})
export class ViewPage implements OnInit {
  title: any;
  data: any;
  type: any;
  fakeData = [1, 2, 3, 4, 5, 6, 7];
  text: any;
  isMobile: boolean = false;

  constructor(
    public server: ServerService,
    public otherService: OtherService,
    private route: ActivatedRoute
  ) {
    this.type = this.route.snapshot.paramMap.get('type');

    const text = localStorage.getItem('app_lang');

    if (text !== null) {
      this.text = JSON.parse(text);
      this.text = this.text.text;
    }

    if (this.type == 'trend') {
      this.title = this.text.trending_store;
    } else if (this.type == 'new') {
      this.title = this.text.new_arrive;
    } else if (this.type == 'random') {
      this.title = this.text.recomended;
    } else {
      this.title = this.type;
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

  ngOnInit() {}

  ionViewDidEnter() {
    this.loadData();
  }

  async loadData() {
    this.server.view(this.type).subscribe((response: any) => {
      this.data = response.data;
    });
  }
}
