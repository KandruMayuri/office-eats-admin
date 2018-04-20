import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Corporate } from './corporate';

@Injectable()
export class CorporateService {

  constructor(private httpClient: HttpClient) { }

  private createCorporateUrl = 'http://dev.sparcteam.com/officeeatz.com/admin/index.php/Restaurant/corporate';
  private getCorporatesUrl = 'http://dev.sparcteam.com/officeeatz.com/admin/index.php/Restaurant/corporate_info';
  private deleteCorporateUrl = 'http://dev.sparcteam.com/officeeatz.com/admin/index.php/Restaurant/delete1/';

  createCorporate(corporate: Corporate) {
    const headers = new HttpHeaders()
    .set('Client-Service', 'frontend-client').set('Auth-Key', 'simplerestapi');
    return this.httpClient
      .post<any>(
        this.createCorporateUrl,
        corporate,
        {
          headers: headers
        }
      )
      .map(res => {
        return res;
      });
  }

  deleteCorporate(corporate_id: number) {
    const headers = new HttpHeaders()
    .set('Client-Service', 'frontend-client').set('Auth-Key', 'simplerestapi');
    return this.httpClient
      .delete<any>(
        this.deleteCorporateUrl + corporate_id,
        {
          headers: headers
        }
      )
      .map(res => {
        return res;
      });
  }

  getCorporates() {
    const headers = new HttpHeaders()
    .set('Client-Service', 'frontend-client').set('Auth-Key', 'simplerestapi');
    return this.httpClient
      .get<any>(
        this.getCorporatesUrl,
        {
          headers: headers
        }
      )
      .map(res => {
        return res;
      });
  }
}
