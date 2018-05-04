import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.scss']
})
export class RestaurantFormComponent implements OnInit {

  restaurantFormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
    this.restaurantFormGroup = new FormGroup({
      restaurantName: new FormControl('', [
        Validators.required
      ]),
      restaurantEmail: new FormControl('', [
        Validators.required
      ]),
      restaurantPhone1: new FormControl('', [
        Validators.required
      ]),
      restaurantPhone2: new FormControl('', [
        Validators.required
      ]),
      restaurantFaxNumber: new FormControl('', [
        Validators.required
      ]),
      restaurantZipCode: new FormControl('', [
        Validators.required
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
        Validators.required
      ]),
      restaurantStreet1: new FormControl('', [
        Validators.required
      ]),
      restaurantTypeName: new FormControl('', [
        Validators.required
      ])
    });
  }

  createRestaurant() {
    if (this.restaurantFormGroup.valid) {

    }
  }

}
