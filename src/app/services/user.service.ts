import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const API = `http://127.0.0.1:8000/api/register`;
const API_LOGIN = `http://127.0.0.1:8000/api/login`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }

  // registra nuovo utente
  addUser(user: User): Observable<any> {
    return this.http.post(API, user);
  }

  logUser(user: User): Observable<any> {
    return this.http.post(API_LOGIN, user);
  }
}
