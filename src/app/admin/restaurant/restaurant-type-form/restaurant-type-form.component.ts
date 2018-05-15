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
  selector: 'app-restaurant-type-form',
  templateUrl: './restaurant-type-form.component.html',
  styleUrls: ['./restaurant-type-form.component.scss']
})
export class RestaurantTypeFormComponent implements OnInit {
  @Input() modalTitle;
  @Input() restaurantTypeId;
  restaurantTypeForm: FormGroup;
  isLoading: boolean;

  constructor(private fb: FormBuilder,
    private restaurantService: RestaurantService,
    public activeModal: NgbActiveModal,
    private messageService: MessageService) { }

  ngOnInit() {
    if (this.restaurantTypeId) {
      this.getRestaurantType();
    }
    this.createForm();
  }

  createForm(): void {
    this.restaurantTypeForm = this.fb.group({
      restaurantTypeId: [''],
      restaurantTypeName: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  saveRestaurantType() {
    if (this.restaurantTypeForm.valid) {
      if (this.restaurantTypeId) {
        this.isLoading = true ;
        this.restaurantService.updateRestaurantType(this.restaurantTypeForm.value).subscribe(data => {
          if (data.obj_response.status === 201) {
            this.messageService.add({severity: 'success', detail: 'Successfully updated restaurant type.'});
            this.activeModal.close(data.obj_response.message);
            this.isLoading = false ;
          }
        }, error => {
          this.isLoading = false;
        });
      } else {
        this.isLoading = true ;
        this.restaurantService.createRestaurantType(this.restaurantTypeForm.value).subscribe(data => {
          if (data.obj_response.status === 201) {
            this.messageService.add({severity: 'success', detail: 'Successfully added restaurant type.'});
            this.activeModal.close(data.obj_response.message);
            this.isLoading = false ;
          }
        }, error => {
          this.isLoading = false;
        });
      }
    }
  }

  getRestaurantType() {
    this.restaurantService.getRestaurantType(this.restaurantTypeId).subscribe(data => {
      this.restaurantTypeForm.patchValue({
        restaurantTypeId: data.result[0].restaurantTypeId,
        restaurantTypeName: data.result[0].restaurantTypeName
      });
    });
  }

}
