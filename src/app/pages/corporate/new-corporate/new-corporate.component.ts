import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CorporateService } from '../corporate.service';

@Component({
  selector: 'app-new-corporate',
  templateUrl: './new-corporate.component.html',
  styleUrls: ['./new-corporate.component.scss']
})
export class NewCorporateComponent implements OnInit {
  corporateFormGroup: FormGroup;
  constructor(private title: Title,
    private router: Router,
    private corporateService: CorporateService ) { }

  ngOnInit() {
    this.title.setTitle('New Corporate | Office Eats Admin');
    this.corporateFormGroup = new FormGroup({
      corporate_name: new FormControl('', [
        Validators.required
      ]),
      corporate_address: new FormControl('', [
        Validators.required
      ]),
      corporate_city: new FormControl('', [
        Validators.required
      ]),
      corporate_state: new FormControl('', [
        Validators.required
      ]),
      corporate_country: new FormControl('', [
        Validators.required
      ]),
      contact_person: new FormControl('', [
        Validators.required
      ]),
      contact_email: new FormControl('', [
        Validators.required
      ]),
      contact_phone: new FormControl('', [
        Validators.required
      ]),
    });
  }

  createCorporate() {
    if (this.corporateFormGroup.valid) {
      this.corporateService.createCorporate(this.corporateFormGroup.value)
      .subscribe((data) => {
        if (data.status === 201) {
          this.router.navigate(['/corporate/list']);
        }
      });
    }
  }
}
