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
  constructor(private restaurantService: RestaurantService) { }

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
      restaurantTextPhoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      restaurantFaxNumber: new FormControl('', [
        Validators.required
      ]),
      restaurantOpenDays: new FormControl('', [
        Validators.required
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
        Validators.required
      ]),
      restaurantCity: new FormControl('', [
        Validators.required
      ]),
      restaurantCountry: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      restaurantStreet1: new FormControl('', [
        Validators.required
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
