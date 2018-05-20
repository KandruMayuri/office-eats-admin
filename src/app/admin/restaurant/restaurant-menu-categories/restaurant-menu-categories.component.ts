import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantService } from '../restaurant.service';
import { RestaurantMenuCategory } from '../restaurant';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';
import { RestaurantMenuCategoryFormComponent } from '../restaurant-menu-category-form/restaurant-menu-category-form.component';

@Component({
  selector: 'app-restaurant-menu-categories',
  templateUrl: './restaurant-menu-categories.component.html',
  styleUrls: ['./restaurant-menu-categories.component.scss']
})
export class RestaurantMenuCategoriesComponent implements OnInit {

  restaurantMenuCategories: RestaurantMenuCategory[];
  isShowLoader: boolean;

  constructor(private restaurantService: RestaurantService,
  private messageService: MessageService,
  private confirmationService: ConfirmationService,
  private modalService: NgbModal) { }

  ngOnInit() {
    this.isShowLoader = true;
    this.getRestaurantMenuCategories();
  }

  getRestaurantMenuCategories() {
    this.restaurantService.getRestaurantMenuCategories().subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurantMenuCategories = data.result;
        this.isShowLoader = false;
      }
    });
  }

  open() {
    const modalRef = this.modalService.open(RestaurantMenuCategoryFormComponent, { centered: true });
    modalRef.componentInstance.modalTitle = 'New Restaurant Menu Category';
    modalRef.result.then((result) => {
      console.log(result);
      this.getRestaurantMenuCategories();
    }, (reason) => {
    });
  }

  deleteRestaurantMenuCategory(restaurantMenuTypeId: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.restaurantService.deleteRestaurantMenuCategory(restaurantMenuTypeId).subscribe(data => {
          if (data.obj_response.status === 201) {
            this.messageService.add({severity: 'success', detail: 'Successfully deleted restaurant menu category.'});
            this.getRestaurantMenuCategories();
          }
        });
      },
      reject: () => {
      }
    });
  }
}
