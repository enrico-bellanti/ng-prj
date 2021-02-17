import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthLogService } from '../auth/auth-log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  email:string;
  password:string;
  isValid:boolean = true;

  constructor(private logControl: AuthLogService, private userService: UserService, private router: Router) {
    
  }

  ngOnInit(): void {
  }


  onInputEmail(event: Event){
    this.email = (<HTMLInputElement>event.target).value;
  }
  onInputPassword(event: Event){
    this.password = (<HTMLInputElement>event.target).value;
  }

  logInUser(): void {
    this.user = {
      "email": this.email,
      "password": this.password
    };
    this.userService.logUser(this.user)
      .subscribe(
        response => {
          localStorage.setItem('token', response.token) 
          localStorage.setItem('user', response.user.name) 
          this.router.navigate(['admin/apartments']) 
        },
        error => {
          console.log('User name o password incorretti', error);
          this.isValid = false;
          this.email = '';
          this.password = '';
        }
      ); 
  }

}
