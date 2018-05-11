import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[];
  isShowLoader: boolean;

  constructor(private restaurantService: RestaurantService,
  private messageService: MessageService,
  private confirmationService: ConfirmationService,
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

  editRestaurant(restaurantId: number) {
    this.router.navigate(['/restaurant/edit/', restaurantId]);
  }

  deleteRestaurant(restaurantId: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.restaurantService.deleteRestaurant(restaurantId).subscribe(data => {
          if (data.obj_response.status === 201) {
            this.messageService.add({severity: 'success', detail: 'Successfully deleted restaurant.'});
            this.getRestaurants();
          }
        });
      },
      reject: () => {
      }
    });
  }
}

