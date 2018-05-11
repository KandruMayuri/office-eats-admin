import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantTypeFormComponent } from './restaurant/restaurant-type-form/restaurant-type-form.component';
import { RestaurantMenuTypeFormComponent } from './restaurant/restaurant-menu-type-form/restaurant-menu-type-form.component';
import { RestaurantMenuFormComponent } from './restaurant/restaurant-menu-form/restaurant-menu-form.component';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public isCollapsed = false;
  constructor(private modalService: NgbModal,
  private router: Router,
  private userService: UserService) { }

  ngOnInit() {
  }

  openRestaurantTypeModal() {
    const modalRef = this.modalService.open(RestaurantTypeFormComponent, { centered: true });
    modalRef.componentInstance.modalTitle = 'New Restaurant Type';
    modalRef.result.then((result) => {
      this.router.navigate(['restaurant/types']);
      console.log(result);
    }, (reason) => {
    });
  }

  openRestaurantMenuModal() {
    const modalRef = this.modalService.open(RestaurantMenuFormComponent, { centered: true });
    modalRef.componentInstance.modalTitle = 'New Restaurant Menu';
    modalRef.result.then((result) => {
      // this.router.navigate(['restaurant/menus']);
      console.log(result);
    }, (reason) => {
    });
  }

  openRestaurntMenuTypeModal() {
    const modalRef = this.modalService.open(RestaurantMenuTypeFormComponent, { centered: true });
    modalRef.componentInstance.modalTitle = 'New Restaurant Menu Type';
    modalRef.result.then((result) => {
      console.log(result);
      this.router.navigate(['restaurant/menu/types']);
    }, (reason) => {
    });
  }

  signOut() {
    this.userService.signOut().subscribe(data => {
      if (data.obj_response.status === 201) {
        this.router.navigate(['auth/sign-in']);
      }
    });
  }
}
