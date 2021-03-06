import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { baseURL } from '../../shared/constants/base-url';
import {
  GetRestaurantsResponse,
  Restaurant,
  GetRestaurantTypesResponse,
  RestaurantType,
  GetRestaurantMenusResponse,
  RestaurantMenu,
  GetRestaurantMenuCategoriesResponse,
  RestaurantMenuCategory } from './restaurant';
import { CommonObjResponse } from '../../shared/models/common-response';
import { State } from '../../shared/models/state';

@Injectable()
export class RestaurantService {

  private getRestaurantsUrl = baseURL + 'restaurants/listing';
  private createRestaurantUrl = baseURL + 'restaurants/create';
  private getRestaurantUrl = baseURL + 'restaurants/view/';
  private updateRestaurantUrl = baseURL + 'restaurants/update/';
  private deleteRestaurantUrl = baseURL + 'restaurants/delete/';

  private getRestaurantTypesUrl = baseURL + 'restaurants/type/list';
  private createRestaurantTypeUrl = baseURL + 'restaurants/type/create';
  private getRestaurantTypeUrl = baseURL + 'restaurants/type/view/';
  private updateRestaurantTypeUrl = baseURL + 'restaurants/type/update';
  private deleteRestaurantTypeUrl = baseURL + 'restaurants/type/delete';

  private createRestaurantMenuUrl = baseURL + 'restaurants/menu/create';
  private getRestaurantMenusUrl = baseURL + 'restaurants/menu/list/';
  private deleteRestaurantMenuUrl = baseURL + 'restaurants/menu/delete';

  private createRestaurantMenuCategoryUrl = baseURL + 'restaurants/menu_type/create';
  private getRestaurantMenuCategoriesUrl = baseURL + 'restaurants/menu_type/list';
  private updateRestaurantMenuCategoryUrl = baseURL + 'restaurants/menu_type/update';
  private deleteRestaurantMenuCategoryUrl = baseURL + 'restaurants/menu_type/delete';

  constructor(private httpClient: HttpClient) { }

  getRestaurants() {
    return this.httpClient
      .post<GetRestaurantsResponse>(this.getRestaurantsUrl, {})
      .map(res => {
        return res;
      });
  }

  createRestaurant(restaurant: Restaurant) {
    return this.httpClient
      .post<CommonObjResponse>(this.createRestaurantUrl, restaurant)
      .map(res => {
        return res;
      });
  }

  deleteRestaurant(restaurantId: number) {
    return this.httpClient
      .post<CommonObjResponse>(this.deleteRestaurantUrl, {restaurantIDs: [restaurantId]})
      .map(res => {
        return res;
      });
  }

  getRestaurant(restaurantId) {
    return this.httpClient
      .post<GetRestaurantsResponse>(this.getRestaurantUrl + restaurantId, {})
      .map(res => {
        return res;
      });
  }

  updateRestaurant(restaurant: Restaurant) {
    return this.httpClient
      .post<GetRestaurantsResponse>(this.updateRestaurantUrl, restaurant)
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

  getRestaurantType(restaurantTypeId: number) {
    return this.httpClient
      .post<GetRestaurantTypesResponse>(this.getRestaurantTypeUrl + restaurantTypeId, {})
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

  updateRestaurantType(restaurantType: RestaurantType) {
    return this.httpClient
      .post<GetRestaurantsResponse>(this.updateRestaurantTypeUrl, restaurantType)
      .map(res => {
        return res;
      });
  }

  deleteRestaurantType(restaurantTypeId: number) {
    const restaurantTypeIDs = { restaurantTypeIDs: [restaurantTypeId] };
    return this.httpClient
      .post<CommonObjResponse>(this.deleteRestaurantTypeUrl, restaurantTypeIDs)
      .map(res => {
        return res;
      });
  }

  getRestaurantMenus(restaurantId: number) {
    return this.httpClient
      .post<GetRestaurantMenusResponse>(this.getRestaurantMenusUrl + restaurantId, {})
      .map(res => {
        return res;
      });
  }

  createRestaurantMenu(restaurantMenu: RestaurantMenu) {
    return this.httpClient
      .post<CommonObjResponse>(this.createRestaurantMenuUrl, restaurantMenu)
      .map(res => {
        return res;
      });
  }

  deleteRestaurantMenu(restaurantMenuId: number) {
    return this.httpClient
      .post<CommonObjResponse>(this.deleteRestaurantMenuUrl, {restaurantMenuIDs: [restaurantMenuId]})
      .map(res => {
        return res;
      });
  }

  getRestaurantMenuCategories() {
    return this.httpClient
      .post<GetRestaurantMenuCategoriesResponse>(this.getRestaurantMenuCategoriesUrl, {})
      .map(res => {
        return res;
      });
  }

  createRestaurantMenuCategory(restaurantMenuCategory: RestaurantMenuCategory) {
    return this.httpClient
      .post<CommonObjResponse>(this.createRestaurantMenuCategoryUrl, restaurantMenuCategory)
      .map(res => {
        return res;
      });
  }

  updateRestaurantMenuCategory(restaurantMenuCategory: RestaurantMenuCategory) {
    return this.httpClient
      .post<CommonObjResponse>(this.updateRestaurantMenuCategoryUrl, restaurantMenuCategory)
      .map(res => {
        return res;
      });
  }

  deleteRestaurantMenuCategory(restaurantMenuTypeId: number) {
    return this.httpClient
      .post<CommonObjResponse>(this.deleteRestaurantMenuCategoryUrl, {restaurantMenuTypeIDs: [restaurantMenuTypeId]})
      .map(res => {
        return res;
      });
  }

  getUSAStates() {
    return this.httpClient
    .get<State[]>('./assets/data/us-states.json')
    .map(res => {
      return res;
    });
  }
}
