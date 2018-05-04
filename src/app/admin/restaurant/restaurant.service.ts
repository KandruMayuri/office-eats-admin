import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { baseURL } from '../../shared/constants/base-url';
import { GetRestaurantsResponse, GetRestaurantTypesResponse, RestaurantType } from './restaurant';
import { CommonObjResponse } from '../../shared/models/common-response';

@Injectable()
export class RestaurantService {

  private getRestaurantsUrl = baseURL + 'restaurants/listing';
  private getRestaurantTypesUrl = baseURL + 'restaurants/type/list';
  private createRestaurantTypeUrl = baseURL + 'restaurants/type/create';

  constructor(private httpClient: HttpClient) { }

  getRestaurants() {
    return this.httpClient
      .post<GetRestaurantsResponse>(this.getRestaurantsUrl, {})
      .map(res => {
        return res;
      });
  }

  getRestaurantTypes() {
    return this.httpClient
      .post<GetRestaurantTypesResponse>(this.getRestaurantTypesUrl, {})
      .map(res => {
        return res;
      });
  }

  createRestaurantType(restaurantType: RestaurantType) {
    return this.httpClient
      .post<CommonObjResponse>(this.createRestaurantTypeUrl, restaurantType)
      .map(res => {
        return res;
      });
  }
}
