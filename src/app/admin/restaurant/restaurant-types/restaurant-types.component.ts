import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { RestaurantType } from '../restaurant';

@Component({
  selector: 'app-restaurant-types',
  templateUrl: './restaurant-types.component.html',
  styleUrls: ['./restaurant-types.component.scss']
})
export class RestaurantTypesComponent implements OnInit {

  restaurantTypes: RestaurantType[];

  constructor( private restaurantService: RestaurantService  ) { }

  ngOnInit() {
    this.getRestaurantTypes();
  }

  getRestaurantTypes() {
    this.restaurantService.getRestaurantTypes().subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurantTypes = data.result;
      }
    });
  }
}
