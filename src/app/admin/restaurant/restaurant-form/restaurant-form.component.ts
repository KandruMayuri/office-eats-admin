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
      r_name: new FormControl('', [
        Validators.required
      ]),
      restaurant_type: new FormControl('', [
        Validators.required
      ]),
      r_pincode: new FormControl('', [
        Validators.required
      ]),
      r_open_time: new FormControl('', [
        Validators.required
      ]),
      r_close_time: new FormControl('', [
        Validators.required
      ])
    });
  }

  createRestaurant() {
    if (this.restaurantFormGroup.valid) {

    }
  }

}
