import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantService } from '../restaurant.service';
import { RestaurantType } from '../restaurant';
import { RestaurantTypeFormComponent } from '../restaurant-type-form/restaurant-type-form.component';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-restaurant-types',
  templateUrl: './restaurant-types.component.html',
  styleUrls: ['./restaurant-types.component.scss']
})
export class RestaurantTypesComponent implements OnInit {

  restaurantTypes: RestaurantType[];
  isShowLoader: boolean;

  constructor(private restaurantService: RestaurantService,
  private messageService: MessageService,
  private modalService: NgbModal,
  private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.isShowLoader = true;
    this.getRestaurantTypes();
  }

  getRestaurantTypes() {
    this.restaurantService.getRestaurantTypes().subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurantTypes = data.result;
        this.isShowLoader = false;
      }
    });
  }

  deleteRestaurantType(restaurantTypeId: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.restaurantService.deleteRestaurantType(restaurantTypeId).subscribe(data => {
          if (data.obj_response.status === 201) {
            this.messageService.add({severity: 'success', detail: 'Successfully deleted restaurant type.'});
            this.getRestaurantTypes();
          }
        });
      },
      reject: () => {
      }
    });
  }

  open() {
    const modalRef = this.modalService.open(RestaurantTypeFormComponent, { centered: true });
    modalRef.componentInstance.modalTitle = 'New Restaurant Type';
    modalRef.result.then((result) => {
      console.log(result);
      this.getRestaurantTypes();
    }, (reason) => {
    });
  }
}
