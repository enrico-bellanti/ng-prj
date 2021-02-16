import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from 'src/app/models/apartment';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  apartment: Apartment;

  constructor(private adminApartmentsService: AdminService, private router : Router, private route: ActivatedRoute) { }
  getMyApartment(): any {
    return this.adminApartmentsService.getSingleApartment(this.route.snapshot.params['id'])
      .subscribe(res => {
        console.log(res);
        this.apartment = res[0];
      });
  }

  ngOnInit(): void {
    this.getMyApartment()
  }

  deleteApartment(id: number){
    return this.adminApartmentsService.delete(id)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('admin/apartments');
    });
  }

}
