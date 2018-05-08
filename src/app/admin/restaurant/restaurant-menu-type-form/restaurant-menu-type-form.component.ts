import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/components/common/messageservice';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-menu-type-form',
  templateUrl: './restaurant-menu-type-form.component.html',
  styleUrls: ['./restaurant-menu-type-form.component.scss']
})
export class RestaurantMenuTypeFormComponent implements OnInit {

  @Input() modalTitle;
  restaurantMenuTypeForm: FormGroup;
  constructor(private fb: FormBuilder,
    private restaurantService: RestaurantService,
    public activeModal: NgbActiveModal,
    private messageService: MessageService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.restaurantMenuTypeForm = this.fb.group({
      restaurantMenuTypeName: ['', Validators.required]
    });
  }

  saveRestaurantMenuType() {
    if (this.restaurantMenuTypeForm.valid) {
      this.restaurantService.createRestaurantMenuType(this.restaurantMenuTypeForm.value).subscribe(data => {
        if (data.obj_response.status === 201) {
          this.messageService.add({severity: 'success', detail: 'Successfully added restaurant menu type.'});
          this.activeModal.close(data.obj_response.message);
        }
      });
    }
  }

}
