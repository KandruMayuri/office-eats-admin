import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantTypeFormComponent } from './restaurant/restaurant-type-form/restaurant-type-form.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public isCollapsed = false;
  constructor(private modalService: NgbModal,
    private router: Router) { }

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
}
