import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantService } from '../restaurant.service';
import { RestaurantMenuType } from '../restaurant';
import { RestaurantMenuTypeFormComponent } from '../restaurant-menu-type-form/restaurant-menu-type-form.component';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-restaurant-menu-types',
  templateUrl: './restaurant-menu-types.component.html',
  styleUrls: ['./restaurant-menu-types.component.scss']
})
export class RestaurantMenuTypesComponent implements OnInit {

  restaurantMenuTypes: RestaurantMenuType[];
  isShowLoader: boolean;

  constructor(private restaurantService: RestaurantService,
  private messageService: MessageService,
  private confirmationService: ConfirmationService,
  private modalService: NgbModal) { }

  ngOnInit() {
    this.isShowLoader = true;
    this.getRestaurantMenuTypes();
  }

  getRestaurantMenuTypes() {
    this.restaurantService.getRestaurantMenuTypes().subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurantMenuTypes = data.result;
        this.isShowLoader = false;
      }
    });
  }

  open() {
    const modalRef = this.modalService.open(RestaurantMenuTypeFormComponent, { centered: true });
    modalRef.componentInstance.modalTitle = 'New Restaurant Menu Type';
    modalRef.result.then((result) => {
      console.log(result);
      this.getRestaurantMenuTypes();
    }, (reason) => {
    });
  }

  deleteRestaurantMenuType(restaurantMenuTypeId: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.restaurantService.deleteRestaurantMenuType(restaurantMenuTypeId).subscribe(data => {
          if (data.obj_response.status === 201) {
            this.messageService.add({severity: 'success', detail: 'Successfully deleted restaurant menu type.'});
            this.getRestaurantMenuTypes();
          }
        });
      },
      reject: () => {
      }
    });
  }

}
