import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Restaurant } from './restaurant';

@Injectable()
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }
  private createRestaurantUrl = 'http://dev.sparcteam.com/officeeatz.com/admin/index.php/Restaurant/register';
  private getRestautantsUrl = 'http://dev.sparcteam.com/officeeatz.com/admin/index.php/Restaurant/restaurant_info';
  private deleteRestautantUrl = 'http://dev.sparcteam.com/officeeatz.com/admin/index.php/Restaurant/delete/';

  createRestaurant(restaurant: Restaurant) {
    const headers = new HttpHeaders()
    .set('Client-Service', 'frontend-client').set('Auth-Key', 'simplerestapi');

    return this.httpClient
      .post<any>(
        this.createRestaurantUrl,
        restaurant,
        {
          headers: headers
        }
      )
      .map(res => {
        return res;
      });
  }

  deleteRestaurant(restaurant_id: number) {
    const headers = new HttpHeaders()
    .set('Client-Service', 'frontend-client').set('Auth-Key', 'simplerestapi');

    return this.httpClient
      .delete<any>(
        this.deleteRestautantUrl + restaurant_id,
        {
          headers: headers
        }
      )
      .map(res => {
        return res;
      });
  }

  getRestaurants() {
    const headers = new HttpHeaders()
    .set('Client-Service', 'frontend-client').set('Auth-Key', 'simplerestapi');

    return this.httpClient
      .get<any>(
        this.getRestautantsUrl,
        {
          headers: headers
        }
      )
      .map(res => {
        return res;
      });
  }
}
