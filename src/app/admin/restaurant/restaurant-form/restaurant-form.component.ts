import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';
import { RestaurantType, Restaurant } from '../restaurant';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { ActivatedRoute } from '@angular/router';
import { State } from '../../../shared/models/state';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.scss']
})
export class RestaurantFormComponent implements OnInit {

  restaurantFormGroup: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  restaurantTypes: RestaurantType[];
  weekDays: Array<any>;
  restaurantId: number;
  restaurant: Restaurant;
  states: State[];

  constructor(private restaurantService: RestaurantService,
  private fb: FormBuilder,
  private router: Router,
  private messageService: MessageService,
  private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => this.restaurantId = params.id );
  }

  ngOnInit() {
    this.weekDays = [
      {
        label: 'Monday',
        value: 'mon'
      },
      {
        label: 'Tuesday',
        value: 'tue'
      },
      {
        label: 'Wednesday',
        value: 'wed'
      },
      {
        label: 'Thursday',
        value: 'thu'
      },
      {
        label: 'Friday',
        value: 'fri'
      },
      {
        label: 'Saturday',
        value: 'sat'
      },
      {
        label: 'Sunday',
        value: 'sun'
      }
    ];

    this.restaurantFormGroup = this.fb.group({
      restaurantId: new FormControl(null, []),
      restaurantName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      restaurantEmail: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      restaurantPhone1: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(0|[1-9][0-9]*)$')
      ]),
      restaurantPhone2: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(0|[1-9][0-9]*)$')
      ]),
      restaurantTextPhoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(0|[1-9][0-9]*)$')
      ]),
      restaurantFaxNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(0|[1-9][0-9]*)$')
      ]),
      restaurantOpenDays: new FormControl('', [
        Validators.required
      ]),
      restaurantZipCode: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(0|[1-9][0-9]*)$')
      ]),
      restaurantTypeId: new FormControl('', [
        Validators.required
      ]),
      restaurantIndividualDeliveryFee: new FormControl('', [
        Validators.required
      ]),
      restaurantMinimumAmount: new FormControl('', [
        Validators.required
      ]),
      restaurantStreet2: new FormControl('', [
        Validators.required
      ]),
      restaurantOpenTime: new FormControl('', [
        Validators.required
      ]),
      restaurantCloseTime: new FormControl('', [
        Validators.required
      ]),
      restaurantCateringDeliveryFee: new FormControl('', [
        Validators.required
      ]),
      restaurantState: new FormControl('', [
        Validators.required
      ]),
      restaurantCity: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      restaurantCountry: new FormControl('USA', [
        Validators.required,
        Validators.minLength(3)
      ]),
      restaurantStreet1: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      restaurantDiscount: new FormControl('', [
        Validators.required
      ]),
      restaurantLogo: new FormControl('')
    });

    if (this.restaurantId > 0) {
      this.getRestaurnt(this.restaurantId);
    }

    this.getRestaurantTypes();

    this.getUSAStates();
  }

  saveRestaurant() {
    if (this.restaurantFormGroup.valid) {
      this.restaurantFormGroup.value.restaurantOpenDays = this.restaurantFormGroup.value.restaurantOpenDays.join();
      if (this.restaurantId) {
        this.restaurantService.updateRestaurant(this.restaurantFormGroup.value).subscribe(data => {
          if (data.obj_response.status === 201) {
            this.messageService.add({severity: 'success', detail: 'Successfully updated restaurant.'});
            this.router.navigate(['restaurants']);
          }
        });
      } else {
        this.restaurantService.createRestaurant(this.restaurantFormGroup.value).subscribe(data => {
          if (data.obj_response.status === 201) {
            this.messageService.add({severity: 'success', detail: 'Successfully added restaurant.'});
            this.router.navigate(['restaurants']);
          }
        });
      }
    }
  }

  getRestaurnt(restaurantId: number) {
    this.restaurantService.getRestaurant(restaurantId).subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurant = data.result[0];
        this.restaurantFormGroup.setValue({
          restaurantId: this.restaurant.restaurantId,
          restaurantName: this.restaurant.restaurantName,
          restaurantTypeId: this.restaurant.restaurantTypeId,
          restaurantEmail: this.restaurant.restaurantEmail,
          restaurantPhone1: this.restaurant.restaurantPhone1,
          restaurantPhone2: this.restaurant.restaurantPhone2,
          restaurantTextPhoneNumber: this.restaurant.restaurantTextPhoneNumber,
          restaurantFaxNumber: this.restaurant.restaurantFaxNumber,
          restaurantStreet1: this.restaurant.restaurantStreet1,
          restaurantStreet2: this.restaurant.restaurantStreet2,
          restaurantCity: this.restaurant.restaurantCity,
          restaurantState: this.restaurant.restaurantState,
          restaurantZipCode: this.restaurant.restaurantZipCode,
          restaurantCountry: this.restaurant.restaurantCountry,
          restaurantOpenTime: this.restaurant.restaurantOpenTime,
          restaurantCloseTime: this.restaurant.restaurantCloseTime,
          restaurantDiscount: this.restaurant.restaurantDiscount,
          restaurantMinimumAmount: this.restaurant.restaurantMinimumAmount,
          restaurantIndividualDeliveryFee: this.restaurant.restaurantIndividualDeliveryFee,
          restaurantCateringDeliveryFee: this.restaurant.restaurantCateringDeliveryFee,
          restaurantLogo: this.restaurant.restaurantLogo,
          restaurantOpenDays: this.restaurant.restaurantOpenDays.split(','),
        });
      }
    });
  }

  getRestaurantTypes() {
    this.restaurantService.getRestaurantTypes().subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurantTypes = data.result;
      }
    });
  }

  getUSAStates() {
    this.restaurantService.getUSAStates().subscribe(data => {
      this.states = data;
    });
  }

}
