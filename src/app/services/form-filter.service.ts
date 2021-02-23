import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filters } from '../models/filters';



@Injectable({
  providedIn: 'root'
})
export class FormFilterService {

  private filters = new BehaviorSubject<Filters>({
    "rooms_number": 1,
    "beds": 1,
    "bathrooms": 1,
    "square_meters": 30,
  });
  currentFilters = this.filters.asObservable();

  constructor() { }

  changeFilters(filters: Filters): void {
    this.filters.next(filters)
  }

}
