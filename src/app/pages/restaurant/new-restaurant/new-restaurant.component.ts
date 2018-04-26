import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.scss']
})
export class NewRestaurantComponent implements OnInit {
  restaurantFormGroup: FormGroup;
  constructor(private title: Title,
    private router: Router,
    private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.title.setTitle('New Restaurant | Office Eats Admin');
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
      this.restaurantService.createRestaurant(this.restaurantFormGroup.value)
      .subscribe((data) => {
        if (data.status === 201) {
          this.router.navigate(['/restaurant/list']);
        }
      });
    }
  }

}
