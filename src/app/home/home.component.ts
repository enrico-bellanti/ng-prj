import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apartment } from '../models/apartment';
import { Filters } from '../models/filters';
import { FormFilterService } from '../services/form-filter.service';
import { GuestApartmentsService } from '../services/guest-apartments.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filteredApartment$: Observable<Apartment[]>;

  constructor(private guestApartmentsService: GuestApartmentsService, private formFilterService: FormFilterService) {

  }

  selectedApartment: number;
    // LETTURA DATI
    // getApartments(): any {
    //   return this.guestApartmentsService.getAllApartments()
    //     .subscribe(res => {
    //       this.apartments = res;
    //     });

    // }

    ngOnInit(): void { 
      this.filteredApartment$ = combineLatest([this.guestApartmentsService.getAllApartments(), this.formFilterService.currentFilters]).pipe(
        map(([apartmentsList, filters]) => apartmentsList.filter(res => res.rooms_number >= filters.rooms_number))
      );
    }
    
    onSelect(id: number): void {
      this.selectedApartment = id;
    }


}
