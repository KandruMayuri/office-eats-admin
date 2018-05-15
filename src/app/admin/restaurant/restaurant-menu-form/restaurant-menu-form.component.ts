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
import { Restaurant, RestaurantMenuType } from '../restaurant';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-restaurant-menu-form',
  templateUrl: './restaurant-menu-form.component.html',
  styleUrls: ['./restaurant-menu-form.component.scss']
})
export class RestaurantMenuFormComponent implements OnInit {

  @Input() modalTitle;
  @Input() restaurantId;
  restaurantMenuForm: FormGroup;
  restaurants: Restaurant[];
  restaurantMenuTypes: RestaurantMenuType[];
  isLoading: boolean;

  constructor(private fb: FormBuilder,
    private restaurantService: RestaurantService,
    public activeModal: NgbActiveModal,
    private messageService: MessageService) { }

  ngOnInit() {
    this.createForm();
    this.getRestaurants();
    this.getRestaurntMenuTypes();
  }

  createForm(): void {
    this.restaurantMenuForm = this.fb.group({
      restaurantId: [this.restaurantId, Validators.required],
      restaurantMenuTypeId: ['', Validators.required],
      restaurantMenuOrderType: ['', Validators.required],
      restaurantMenuName: ['', [Validators.required, Validators.minLength(3)]],
      restaurantMenuPrice: ['', Validators.required]
    });
  }

  saveRestaurantType() {
    if (this.restaurantMenuForm.valid) {
      this.isLoading = true ;
      this.restaurantService.createRestaurantMenu(this.restaurantMenuForm.value).subscribe(data => {
        if (data.obj_response.status === 201) {
          this.messageService.add({severity: 'success', detail: 'Successfully added restaurant menu.'});
          this.activeModal.close(data.obj_response.message);
          this.isLoading = false ;
        }
      }, error => {
        this.isLoading = false;
      });
    }
  }

  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurants = data.result;
      }
    });
  }

  getRestaurntMenuTypes() {
    this.restaurantService.getRestaurantMenuTypes().subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurantMenuTypes = data.result;
      }
    });
  }

}
