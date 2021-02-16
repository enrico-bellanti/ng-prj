import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthLogService } from '../auth/auth-log.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn:boolean = false;

  constructor(private logControl: AuthLogService, private router: Router) { 
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (this.logControl.onUserLog()) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      }
    });
  }


  getOutSession(){
    localStorage.removeItem('token');
    this.router.navigate([''])
  }


}
