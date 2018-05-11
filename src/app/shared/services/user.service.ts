import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { User, SignInResponse } from '../models/user';
import { CommonObjResponse } from '../models/common-response';
import { baseURL } from '../constants/base-url';
import { StorageService } from './storage.service';

@Injectable()
export class UserService {
  private storage: StorageService;
  private authorizeUrl = baseURL + 'Users/login';
  private signOutUrl = baseURL + 'users/logout/';
  constructor(private httpClient: HttpClient,
    private storageService: StorageService) {
      this.storage = storageService;
  }
  public getToken(): any {
    return this.storage.retrieve('currentUser');
  }

  public resetCurrentUser() {
    this.storage.store('currentUser', '');
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

  signOut() {
    return this.httpClient
      .post<CommonObjResponse>(
        this.signOutUrl,
        {}
      )
      .map(res => {
        this.resetCurrentUser();
        return res;
      });
  }
}
