import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToNewRestaurant() {
    this.router.navigate(['restaurant/new']);
  }
}
