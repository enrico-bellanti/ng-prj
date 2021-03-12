import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apartment } from '../models/apartment';
import { FormFilterService } from '../services/form-filter.service';
import { GuestApartmentsService } from '../services/guest-apartments.service';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filteredApartment$: Observable<Apartment[]>;

  constructor(private dialog: MatDialog, private guestApartmentsService: GuestApartmentsService, private formFilterService: FormFilterService) { }

  selectedApartment: number;

    ngOnInit(): void { 
      this.filteredApartment$ = combineLatest([this.guestApartmentsService.getAllApartments(), this.formFilterService.currentFilters]).pipe(
        map(([apartmentsList, filters]) => apartmentsList.filter(res => res.rooms_number >= filters.rooms_number))
      );
    }
    
    onSelect(id: number): void {
      this.selectedApartment = id;
    }

    openDialog(value) {
      this.dialog.open(ModalComponent, {data: value});
    }


}
