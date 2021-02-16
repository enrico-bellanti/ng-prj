import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apartment } from 'src/app/models/apartment';

const API = `http://127.0.0.1:8000/api/admin/apartments/`;
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http: HttpClient, ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // VISUALIZZARE TUTTI GLI APPARTAMENTI 
  getAllApartments(): Observable<Apartment> {
      return this.http.get<Apartment>(API);
  }

  getSingleApartment(id: number): Observable<Apartment> {
      return this.http.get<Apartment>(API + id);
  }

  create(post: Apartment): Observable<Apartment> {
    return this.http.post<Apartment>(API, JSON.stringify(post), this.httpOptions)
  }  

  update(new_data: Apartment, id: number): Observable<Apartment> {
    console.log(new_data);
    return this.http.put<Apartment>(API + id, JSON.stringify(new_data), this.httpOptions)
  }  

  delete(id: number): Observable<Apartment> {
    return this.http.delete<Apartment>(API + id, this.httpOptions);
  }

}
