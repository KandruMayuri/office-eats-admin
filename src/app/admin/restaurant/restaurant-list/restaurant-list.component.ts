import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[];
  isShowLoader: boolean;

  constructor(private restaurantService: RestaurantService,
    private router: Router) { }

  ngOnInit() {
    this.isShowLoader = true;
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurants = data.result;
        this.isShowLoader = false;
      }
    });
  }

  viewRestaurantMenu(restaurantId: number) {
    this.router.navigate(['/restaurant/menu/', restaurantId]);
  }

  newRestaurant() {
    this.router.navigate(['/restaurant/new/']);
  }
}

