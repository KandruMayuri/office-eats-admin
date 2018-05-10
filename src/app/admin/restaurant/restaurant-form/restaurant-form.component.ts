import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';
import { RestaurantType } from '../restaurant';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

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
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService) { }

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
      restaurantOpenDays: this.fb.array([]),
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
      ]),
      restaurantLogo: new FormControl('')
    });

    this.getRestaurantTypes();
  }

  createRestaurant() {
    if (this.restaurantFormGroup.valid) {
      this.restaurantFormGroup.value.restaurantOpenDays = this.restaurantFormGroup.value.restaurantOpenDays.join();
      this.restaurantService.createRestaurant(this.restaurantFormGroup.value).subscribe(data => {
        if (data.obj_response.status === 201) {
          this.messageService.add({severity: 'success', detail: 'Successfully added restaurant.'});
          this.router.navigate(['restaurants']);
        }
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
