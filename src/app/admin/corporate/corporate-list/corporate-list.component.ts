import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';
import { Corporate } from '../corporate';
import { CorporateService } from '../corporate.service';

@Component({
  selector: 'app-corporate-list',
  templateUrl: './corporate-list.component.html',
  styleUrls: ['./corporate-list.component.scss']
})
export class CorporateListComponent implements OnInit {

  corporates: Corporate[];
  isShowLoader: boolean;

  constructor(private corporateService: CorporateService,
  private messageService: MessageService,
  private confirmationService: ConfirmationService,
  private router: Router) { }

  ngOnInit() {
    this.isShowLoader = true;
    this.getCorporates();
  }

  getCorporates() {
    this.corporateService.getCorporates().subscribe(data => {
      if (data.obj_response.status === 201) {
        this.corporates = data.result;
        this.isShowLoader = false;
      }
    }, error => {
      this.isShowLoader = false;
    });
  }

  newCorporate() {
    this.router.navigate(['/corporate/new/']);
  }

  editCorporate(corporateId: number) {
    this.router.navigate(['/corporate/edit/', corporateId]);
  }

  deleteCorporate(corporateId: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.corporateService.deleteCorporate(corporateId).subscribe(data => {
          if (data.obj_response.status === 201) {
            this.messageService.add({severity: 'success', detail: 'Successfully deleted corporate.'});
            this.getCorporates();
          }
        });
      },
      reject: () => {
      }
    });
  }

}
