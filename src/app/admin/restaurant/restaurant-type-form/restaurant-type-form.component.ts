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
  selector: 'app-restaurant-type-form',
  templateUrl: './restaurant-type-form.component.html',
  styleUrls: ['./restaurant-type-form.component.scss']
})
export class RestaurantTypeFormComponent implements OnInit {
  @Input() modalTitle;
  restaurantTypeForm: FormGroup;
  constructor(private fb: FormBuilder,
    private restaurantService: RestaurantService,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.restaurantTypeForm = this.fb.group({
      restaurantTypeName: ['', Validators.required]
    });
  }

  saveRestaurantType() {
    if (this.restaurantTypeForm.valid) {
      this.restaurantService.createRestaurantType(this.restaurantTypeForm.value).subscribe(data => {
        if (data.obj_response.status === 201) {
          this.activeModal.close(data.obj_response.message);
        }
      });
    }
  }

}
