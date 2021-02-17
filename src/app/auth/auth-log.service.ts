import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthLogService {

  constructor() { }

  logStatus = new Observable((status) => {
    let token = localStorage.getItem('token');
  
    // Simple geolocation API check provides values to publish
    if (!!token) {
      status.next(true);
    } else {
      status.next(false);
    }

  });



}
