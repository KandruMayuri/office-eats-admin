import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantService } from '../restaurant.service';
import { RestaurantType } from '../restaurant';
import { RestaurantTypeFormComponent } from '../restaurant-type-form/restaurant-type-form.component';

@Component({
  selector: 'app-restaurant-types',
  templateUrl: './restaurant-types.component.html',
  styleUrls: ['./restaurant-types.component.scss']
})
export class RestaurantTypesComponent implements OnInit {

  restaurantTypes: RestaurantType[];

  constructor(private restaurantService: RestaurantService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getRestaurantTypes();
  }

  getRestaurantTypes() {
    this.restaurantService.getRestaurantTypes().subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurantTypes = data.result;
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
