import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.scss']
})
export class RestaurantFormComponent implements OnInit {

  restaurantFormGroup: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantFormGroup = new FormGroup({
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
      restaurantOpenDays: new FormControl('', [
        Validators.required,
        Validators.minLength(7)
      ]),
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
  }

  createRestaurant() {
    if (this.restaurantFormGroup.valid) {
      this.restaurantService.createRestaurant(this.restaurantFormGroup.value).subscribe(data => {
        console.log(data);
      });
    }
  }

}
