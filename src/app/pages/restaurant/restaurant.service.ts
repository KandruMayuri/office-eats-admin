import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Restaurant } from './restaurant';

@Injectable()
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }
  private createRestaurantUrl = 'http://dev.sparcteam.com/officeeatz.com/admin/index.php/Restaurant/register';

  createRestaurant(restaurant: Restaurant) {
    return this.httpClient
      .post<any>(
        this.createRestaurantUrl,
        restaurant
      )
      .map(res => {
        return res;
      });
  }
}
