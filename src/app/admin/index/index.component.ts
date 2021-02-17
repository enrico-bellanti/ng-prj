import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/models/apartment';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  apartments: Apartment;

  constructor(private adminApartmentsService: AdminService, private router : Router) { }

    // LETTURA DATI
    getApartments(): any {
      return this.adminApartmentsService.getAllApartments()
        .subscribe(res => {
          this.apartments = res;
        });
    }
      ngOnInit(): void {
        this.getApartments();
      }


}
