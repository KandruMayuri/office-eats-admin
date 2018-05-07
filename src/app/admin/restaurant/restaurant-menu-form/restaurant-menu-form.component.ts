import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-menu-form',
  templateUrl: './restaurant-menu-form.component.html',
  styleUrls: ['./restaurant-menu-form.component.scss']
})
export class RestaurantMenuFormComponent implements OnInit {

  @Input() modalTitle;
  restaurantMenuForm: FormGroup;

  constructor(private fb: FormBuilder,
    private restaurantService: RestaurantService,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.restaurantMenuForm = this.fb.group({
      restaurantMenuTypeName: ['', Validators.required]
    });
  }

  saveRestaurantType() {
    if (this.restaurantMenuForm.valid) {
      this.restaurantService.createRestaurantMenu(this.restaurantMenuForm.value).subscribe(data => {
        if (data.obj_response.status === 201) {
          this.activeModal.close(data.obj_response.message);
        }
      });
    }
  }

}
