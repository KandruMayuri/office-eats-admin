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
      ])
    });
  }

  createRestaurant() {
    if (this.restaurantFormGroup.valid) {

    }
  }

}
