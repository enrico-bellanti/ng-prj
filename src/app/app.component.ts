import { Component } from '@angular/core';
import { AuthLogService } from './auth/auth-log.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogged:boolean = false;
  

  constructor(private router: Router, private authLogService: AuthLogService) { }

  ngDoCheck(){
    this.authLogService.logStatus.subscribe( 
      value => {
        this.setLog(value);
      })
  }

  setLog(value){
    this.isLogged = value;
  }

  getOutSession(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLogged = false;
    this.router.navigate([''])
  }


}
