import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantService } from '../restaurant.service';
import { RestaurantMenu } from '../restaurant';
import { RestaurantMenuFormComponent } from '../restaurant-menu-form/restaurant-menu-form.component';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-restaurant-menus',
  templateUrl: './restaurant-menus.component.html',
  styleUrls: ['./restaurant-menus.component.scss']
})
export class RestaurantMenusComponent implements OnInit {
  restaurantMenus: RestaurantMenu[];
  restaurantId: number;
  isShowLoader: boolean;

  constructor(private restaurantService: RestaurantService,
  private modalService: NgbModal,
  private messageService: MessageService,
  private confirmationService: ConfirmationService,
  private activatedRoute: ActivatedRoute) {
  this.activatedRoute.params.subscribe( params => this.restaurantId = params.id );
  }

  ngOnInit() {
    this.isShowLoader = true;
    this.getRestaurantMenus();
  }

  getRestaurantMenus() {
    this.restaurantService.getRestaurantMenus(this.restaurantId).subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurantMenus = data.result;
        this.isShowLoader = false;
      }
    });
  }

  newRestaurantMenu() {
    const modalRef = this.modalService.open(RestaurantMenuFormComponent, { centered: true });
    modalRef.componentInstance.modalTitle = 'New Restaurant Menu';
    modalRef.result.then((result) => {
      console.log(result);
      this.getRestaurantMenus();
    }, (reason) => {
    });
  }

  deleteRestaurantMenu(restaurantMenuId: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.restaurantService.deleteRestaurantMenu(restaurantMenuId).subscribe(data => {
          if (data.obj_response.status === 201) {
            this.messageService.add({severity: 'success', detail: 'Successfully deleted restaurant menu.'});
            this.getRestaurantMenus();
          }
        });
      },
      reject: () => {
      }
    });
  }

}
