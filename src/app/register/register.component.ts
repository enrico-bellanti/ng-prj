import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../classe/custom-validators';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
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
        this.user = response;
        console.log(this.user);
        localStorage.setItem('token', response.token)
        this.router.navigate(['']); } ); 
  }

}
