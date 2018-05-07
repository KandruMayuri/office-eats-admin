import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantService } from '../restaurant.service';
import { RestaurantMenu } from '../restaurant';
import { RestaurantMenuFormComponent } from '../restaurant-menu-form/restaurant-menu-form.component';

@Component({
  selector: 'app-restaurant-menus',
  templateUrl: './restaurant-menus.component.html',
  styleUrls: ['./restaurant-menus.component.scss']
})
export class RestaurantMenusComponent implements OnInit {
  restaurantMenus: RestaurantMenu[];
  constructor(private restaurantService: RestaurantService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getRestaurantMenus();
  }

  getRestaurantMenus() {
    this.restaurantService.getRestaurantMenus().subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurantMenus = data.result;
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

}
