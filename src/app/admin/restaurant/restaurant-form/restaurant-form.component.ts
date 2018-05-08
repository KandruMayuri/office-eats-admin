import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';
import { RestaurantType } from '../restaurant';

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
  constructor(private restaurantService: RestaurantService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.weekDays = [
      {
        name: 'Monday',
        value: 'mon'
      },
      {
        name: 'Tuesday',
        value: 'tue'
      },
      {
        name: 'Wednesday',
        value: 'wed'
      },
      {
        name: 'Thursday',
        value: 'thu'
      },
      {
        name: 'Friday',
        value: 'fri'
      },
      {
        name: 'Saturday',
        value: 'Sat'
      },
      {
        name: 'Sunday',
        value: 'Sun'
      }
    ];

    this.restaurantFormGroup = this.fb.group({
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
        Validators.minLength(5)
      ]),
      restaurantPhone2: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      restaurantTextPhoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      restaurantFaxNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      restaurantOpenDays: this.fb.array([]),
      restaurantZipCode: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
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
        Validators.required,
        Validators.minLength(3)
      ]),
      restaurantCity: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      restaurantCountry: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      restaurantStreet1: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      restaurantDiscount: new FormControl('', [
        Validators.required
      ])
    });

    this.getRestaurantTypes();
  }

  createRestaurant() {
    if (this.restaurantFormGroup.valid) {
      this.restaurantFormGroup.value.restaurantOpenDays = this.restaurantFormGroup.value.restaurantOpenDays.join();
      this.restaurantService.createRestaurant(this.restaurantFormGroup.value).subscribe(data => {
        console.log(data);
      });
    }
  }

  getRestaurantTypes() {
    this.restaurantService.getRestaurantTypes().subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurantTypes = data.result;
      }
    });
  }

  onChangeWeekDay(weekday: string, isChecked: boolean) {
    const openDaysFormArray = <FormArray>this.restaurantFormGroup.controls.restaurantOpenDays;
      if (isChecked) {
        openDaysFormArray.push(new FormControl(weekday));
      } else {
        const index = openDaysFormArray.controls.findIndex(x => x.value === weekday);
        openDaysFormArray.removeAt(index);
      }
  }

}
