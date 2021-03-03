import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
constructor(public router: Router) {}

  canActivate(): boolean {
    let token = this.getToken();
    if (!!token && token.length > 0) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }
}