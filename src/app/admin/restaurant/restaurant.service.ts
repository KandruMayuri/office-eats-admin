import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { baseURL } from '../../shared/constants/base-url';
import { GetRestaurantsResponse, GetRestaurantTypesResponse } from './restaurant';

@Injectable()
export class RestaurantService {

  private getRestaurantsUrl = baseURL + 'restaurants/listing';
  private getRestaurantTypesUrl = baseURL + 'restaurants/type/list';

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

}
