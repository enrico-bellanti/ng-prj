import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../classe/custom-validators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // user: User;
  userForm: FormGroup;

  static isValidEmail(control: FormControl): any {
    const emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    return emailRegexp.test(control.value) ? null : {
      invalidEmail: true
    };
  }

  constructor(private userService: UserService, private router: Router, fb: FormBuilder) {
    this.userForm = fb.group({
      email: fb.control('', [Validators.required, Validators.minLength(3), RegisterComponent.isValidEmail]),
      name: fb.control('', [Validators.required, Validators.minLength(3)]),
      password: fb.control('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        CustomValidators.patternValidator(/[@#{}|!()*{}]/, { hasSpecialCharacters: true }),
      ])
    });
  }
  ngOnInit(): void {
  }

  createUser(): void {
    this.userService.addUser(this.userForm.value)
      .subscribe(response => {
        let user = {
          "email": this.userForm.value.email,
          "password": this.userForm.value.password
        };
        this.userService.logUser(user)
        .subscribe(
          response => {
            localStorage.setItem('token', response.token) 
            localStorage.setItem('user', response.user.name) 
            this.router.navigate(['admin/apartments']) 
          },
          error => {
            console.log('User name o password incorretti', error);
          }
        ); 
      }); 
  }

}
