import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CorporateService } from '../corporate.service';
import { Corporate } from '../corporate';

@Component({
  selector: 'app-corporate-list',
  templateUrl: './corporate-list.component.html',
  styleUrls: ['./corporate-list.component.scss']
})
export class CorporateListComponent implements OnInit {
  corporates: Corporate[];
  constructor(private title: Title,
    private router: Router,
    private corporateService: CorporateService) { }

  ngOnInit() {
    this.title.setTitle('Corporates | Office Eats Admin');
    this.corporateService.getCorporates()
    .subscribe(data => {
      if (data.status === 200) {
        this.corporates = data.corporate_info_details;
      }
    });
  }

  navigateToNewCorporate() {
    this.router.navigate(['/corporate/new']);
  }

  deleteCorporate(corporate_id: number, index: number) {
    this.corporateService.deleteCorporate(corporate_id)
    .subscribe(data => {
      if (data.status === 200) {
        this.corporates.splice(index, 1);
      }
    });
  }

}
