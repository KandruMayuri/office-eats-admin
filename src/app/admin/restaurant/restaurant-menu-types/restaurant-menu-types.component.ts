import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantService } from '../restaurant.service';
import { RestaurantMenuType } from '../restaurant';
import { RestaurantMenuTypeFormComponent } from '../restaurant-menu-type-form/restaurant-menu-type-form.component';

@Component({
  selector: 'app-restaurant-menu-types',
  templateUrl: './restaurant-menu-types.component.html',
  styleUrls: ['./restaurant-menu-types.component.scss']
})
export class RestaurantMenuTypesComponent implements OnInit {

  restaurantMenuTypes: RestaurantMenuType[];

  constructor(private restaurantService: RestaurantService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getRestaurantMenuTypes();
  }

  getRestaurantMenuTypes() {
    this.restaurantService.getRestaurantMenuTypes().subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurantMenuTypes = data.result;
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

}
