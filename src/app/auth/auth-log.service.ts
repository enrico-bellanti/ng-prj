import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLogService {

  constructor() { }

  onUserLog(){
    let token = localStorage.getItem('token');
    if (!!token && token.length > 0) {
      return true;
    }
    return false;
  }
}
