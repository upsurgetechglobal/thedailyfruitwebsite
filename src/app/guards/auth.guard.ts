import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OtherService } from '../service/other/other.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,public otherService : OtherService) {}

  canActivate(): boolean {
    if (localStorage.getItem('user_id') == undefined || !localStorage.getItem('user_id') || localStorage.getItem('user_id') == 'null') {
      
      this.router.navigate(['/login']);

      this.otherService.toast("Please login for continue");

      return false;
    }
    return true;
  }
}