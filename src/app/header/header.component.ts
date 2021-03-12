import { Component, DoCheck, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLogService } from '../auth/auth-log.service';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck  {
  isLogged = false;
  isOpen = false;
  accountName = 'Account';
  user: User;

  @Output() navToggle = new EventEmitter<boolean>();
  navOpen() {
    this.navToggle.emit(true);
  }

  constructor(private router: Router, private authLogService: AuthLogService) { }


  getOutSession(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLogged = false;
    this.router.navigate([''])
  }

  toggleDropdown(){
    this.isOpen = !this.isOpen;
  }

  closeDropdown(){
    this.isOpen = false;
  }

  setLog(value){
    this.isLogged = value;
    let user = localStorage.getItem('user');
    
    if (value == true) {
      this.accountName = user;
    } else {
      this.accountName = 'Account'
    }
  }

  ngDoCheck(){
    this.authLogService.logStatus.subscribe( 
      value => {
        this.setLog(value);
      })
  }

   



}
