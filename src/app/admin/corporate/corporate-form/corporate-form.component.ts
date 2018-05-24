import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../restaurant/restaurant.service';
import { State } from '../../../shared/models/state';
import { CorporateService } from '../corporate.service';
import { Corporate } from '../corporate';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-corporate-form',
  templateUrl: './corporate-form.component.html',
  styleUrls: ['./corporate-form.component.scss']
})
export class CorporateFormComponent implements OnInit {
  corporateFormGroup: FormGroup;
  restaurants: SelectItem[];
  states: State[];
  isLoading: boolean;

  constructor(
    private corporateService: CorporateService,
    private restaurantService: RestaurantService,
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute) {

    }

  ngOnInit() {
    this.corporateFormGroup = this.fb.group({
      corporateId: new FormControl(null, []),
      corporateName: new FormControl('', [
        Validators.required
      ]),
      contactEmail: new FormControl('', [
        Validators.required, Validators.email
      ]),
      contactPhone: new FormControl('', [
        Validators.required
      ]),
      contactPerson: new FormControl('', [
        Validators.required
      ]),
      corporateAddress: new FormControl('', [
        Validators.required
      ]),
      corporateCity: new FormControl('', [
        Validators.required
      ]),
      corporateState: new FormControl('', [
        Validators.required
      ]),
      corporateCountry: new FormControl('USA', [
        Validators.required
      ]),
      corporateRestaurantIds: new FormControl('', [
        Validators.required
      ])
    });
    this.getRestaurants();
    this.getUSAStates();
  }

  getUSAStates() {
    this.restaurantService.getUSAStates().subscribe(data => {
      this.states = data;
    });
  }

  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurants = [];
        data.result.forEach(item => {
          this.restaurants.push({value: item.restaurantId, label: item.restaurantName});
        });
      }
    });
  }

  createCorporate() {
    this.isLoading = true ;
    this.corporateService.createCorporate(this.corporateFormGroup.value).subscribe(data => {
      if (data.obj_response.status === 201) {
        this.messageService.add({severity: 'success', detail: 'Successfully added corporate.'});
        this.isLoading = false;
        this.router.navigate(['corporates']);
      }
    }, error => {
      this.isLoading = false;
    });
  }

}
