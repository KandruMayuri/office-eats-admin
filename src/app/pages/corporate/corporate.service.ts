import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Corporate } from './corporate';

@Injectable()
export class CorporateService {

  constructor(private httpClient: HttpClient) { }

  private createCorporateUrl = 'http://dev.sparcteam.com/officeeatz.com/admin/index.php/Restaurant/corporate';

  createCorporate(corporate: Corporate) {
    return this.httpClient
      .post<any>(
        this.createCorporateUrl,
        corporate
      )
      .map(res => {
        return res;
      });
  }
}
