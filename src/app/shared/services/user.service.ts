import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { User, SignInResponse } from '../models/user';
import { baseURL } from '../constants/base-url';
import { StorageService } from './storage.service';

@Injectable()
export class UserService {
  private storage: StorageService;
  private authorizeUrl = baseURL + 'Users/login';
  constructor(private httpClient: HttpClient,
    private storageService: StorageService) {
      this.storage = storageService;
  }
  public getToken(): any {
        return this.storage.retrieve('currentUser');
  }

  public resetCurrentUser() {
    this.storage.store('currentUser', '');
    this.storage.store('corporate_id', '');
  }

  signIn(user: User) {
    return this.httpClient
      .post<SignInResponse>(this.authorizeUrl, user)
      .map(res => {
        if (res.token) {
          this.storage.store('currentUser', { id: res.id, token: res.token });
        }
        return res;
      });
  }
}
