import { Component, OnInit } from '@angular/core';
import { Apartment } from '../models/apartment';
import { GuestApartmentsService } from '../services/guest-apartments.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apartments: Apartment;

  constructor(private guestApartmentsService: GuestApartmentsService) { }
  selectedApartment: number;
    // LETTURA DATI
    getApartments(): any {
      return this.guestApartmentsService.getAllApartments()
        .subscribe(res => {
          this.apartments = res;
        });
    }

    ngOnInit(): void {
      this.getApartments();
    }
    
    onSelect(id: number): void {
      this.selectedApartment = id;
    }


}
