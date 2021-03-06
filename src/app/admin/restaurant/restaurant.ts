import { CommonResponse } from '../../shared/models/common-response';

export interface Restaurant {
  restaurantCateringDeliveryFee: number;
  restaurantCity: number;
  restaurantCloseTime: string;
  restaurantCountry: string;
  restaurantDiscount: number;
  restaurantEmail: string;
  restaurantFaxNumber: number;
  restaurantId: number;
  restaurantIndividualDeliveryFee: number;
  restaurantLogo: string;
  restaurantMinimumAmount: number;
  restaurantName: string;
  restaurantOpenDays: string;
  restaurantOpenTime: string;
  restaurantPhone1: number;
  restaurantPhone2: number;
  restaurantState: string;
  restaurantStreet1: string;
  restaurantStreet2: string;
  restaurantTextPhoneNumber: number;
  restaurantTypeName: string;
  restaurantZipCode: number;
  restaurantTypeId: number;
}

export interface RestaurantType {
  restaurantTypeId: number;
  restaurantTypeName: string;
}

export interface RestaurantMenu {
  restaurantMenuId: number;
  restaurantMenuTypeName: string;
}

export interface RestaurantMenuCategory {
  restaurantMenuTypeId: number;
  restaurantMenuTypeName: string;
}

export interface GetRestaurantsResponse {
  obj_response: CommonResponse;
  result: Restaurant [];
}

export interface GetRestaurantTypesResponse {
  obj_response: CommonResponse;
  result: RestaurantType [];
}

export interface GetRestaurantMenusResponse {
  obj_response: CommonResponse;
  result: RestaurantMenu [];
}

export interface GetRestaurantMenuCategoriesResponse {
  obj_response: CommonResponse;
  result: RestaurantMenuCategory [];
}
