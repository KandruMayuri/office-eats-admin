import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corporate-list',
  templateUrl: './corporate-list.component.html',
  styleUrls: ['./corporate-list.component.scss']
})
export class CorporateListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToNewCorporate() {
    this.router.navigate(['/corporate/new']);
  }

}
