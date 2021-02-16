import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from 'src/app/models/apartment';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  apartment: Apartment
  form: FormGroup;
  id: number;
   
  constructor(
    private adminApartmentsService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.getMyApartment();

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      rooms_number: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required])
    });
  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    this.id = this.route.snapshot.params['id'];
    this.adminApartmentsService.update(this.form.value, this.id).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('admin/apartments');
    })
  }

  getMyApartment(): any {
    return this.adminApartmentsService.getSingleApartment(this.route.snapshot.params['id'])
      .subscribe(res => {
        console.log(res);
        this.apartment = res[0];
      });
  }

}
