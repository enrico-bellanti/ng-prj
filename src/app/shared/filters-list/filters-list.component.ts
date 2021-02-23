import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Filters } from 'src/app/models/filters';
import { FormFilterService } from 'src/app/services/form-filter.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.css']
})
export class FiltersListComponent implements OnInit {
  userForm: FormGroup;
  isOpen = false;
  filters:Filters;

  constructor(private userService: UserService, fb: FormBuilder, private formFilterService: FormFilterService) {
    this.userForm = fb.group({
      rooms_number: fb.control(1),
      beds: fb.control(1),
      bathrooms: fb.control(1),
      square_meters: fb.control(30)
    });
  }

  ngOnInit(): void {
    this.formFilterService.currentFilters.subscribe(res => this.filters = res)
  }

  toggleDropdown(){
    this.isOpen = !this.isOpen;
  }

  closeDropdown(){
    this.isOpen = false;
  }

  checkForm(){
    this.formFilterService.changeFilters(this.userForm.value)
  }
  

}
