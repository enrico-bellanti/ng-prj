import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../models/apartment';

const API = `http://127.0.0.1:8000/api/home`;
@Injectable({
  providedIn: 'root'
})
export class GuestApartmentsService {

  constructor(private http: HttpClient) { }
  // VISUALIZZARE TUTTI GLI APPARTAMENTI 
  getAllApartments(): Observable<Apartment> {
      return this.http.get<Apartment>(API);
  }
}
