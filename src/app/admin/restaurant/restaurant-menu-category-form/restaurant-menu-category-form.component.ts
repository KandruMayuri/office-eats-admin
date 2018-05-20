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
  selector: 'app-restaurant-menu-category-form',
  templateUrl: './restaurant-menu-category-form.component.html',
  styleUrls: ['./restaurant-menu-category-form.component.scss']
})
export class RestaurantMenuCategoryFormComponent implements OnInit {

  @Input() modalTitle;
  restaurantMenuCategoryForm: FormGroup;
  isLoading: boolean;

  constructor(private fb: FormBuilder,
    private restaurantService: RestaurantService,
    public activeModal: NgbActiveModal,
    private messageService: MessageService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.restaurantMenuCategoryForm = this.fb.group({
      restaurantMenuTypeName: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  saveRestaurantMenuType() {
    if (this.restaurantMenuCategoryForm.valid) {
      this.isLoading = true ;
      this.restaurantService.createRestaurantMenuCategory(this.restaurantMenuCategoryForm.value).subscribe(data => {
        if (data.obj_response.status === 201) {
          this.messageService.add({severity: 'success', detail: 'Successfully added restaurant menu category.'});
          this.activeModal.close(data.obj_response.message);
          this.isLoading = false;
        }
      }, error => {
        this.isLoading = false;
      });
    }
  }

}
