import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(
    private title: Title,
    private router: Router,
    private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.title.setTitle('Restaurants | Office Eats Admin');
    this.restaurantService.getRestaurants()
    .subscribe(data => {
      if (data.status === 200) {
        this.restaurants = data.restaurant_info_details;
      }
    });
  }

  navigateToNewRestaurant() {
    this.router.navigate(['restaurant/new']);
  }

  deleteRestaurant(restaurant_id: number, index: number) {
    this.restaurantService.deleteRestaurant(restaurant_id)
    .subscribe(data => {
      if (data.status === 200) {
        this.restaurants.splice(index, 1);
      }
    });
  }
}
