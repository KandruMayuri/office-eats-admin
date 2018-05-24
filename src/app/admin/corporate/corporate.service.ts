import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { baseURL } from '../../shared/constants/base-url';
import { CommonObjResponse } from '../../shared/models/common-response';
import { Corporate, GetCorporatesResponse } from './corporate';

@Injectable()
export class CorporateService {
  private getCorporatesUrl = baseURL + 'corporates/listing';
  private createCorporateUrl = baseURL + 'corporates/create';
  private deleteCorporateUrl = baseURL + 'corporates/delete';

  constructor(private httpClient: HttpClient) { }

  getCorporates() {
    return this.httpClient
      .post<GetCorporatesResponse>(this.getCorporatesUrl, {})
      .map(res => {
        return res;
      });
  }

  createCorporate(corporate: Corporate) {
    return this.httpClient
      .post<CommonObjResponse>(this.createCorporateUrl, corporate)
      .map(res => {
        return res;
      });
  }

  deleteCorporate(corporateId: number) {
    return this.httpClient
      .post<CommonObjResponse>(this.deleteCorporateUrl, {corporateIDs: [corporateId]})
      .map(res => {
        return res;
      });
  }

}
