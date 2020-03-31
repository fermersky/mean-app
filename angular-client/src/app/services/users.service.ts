import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  register(name, email, password): Observable<UserInfo> {
    return this.http.post<UserInfo>(this.baseUrl + '/register', {
      name,
      email,
      password
    });
  }

  isSignedIn(): boolean {
    const uinfo = JSON.parse(localStorage.getItem('UserInfo'));
    return uinfo ? true : false;
  }

  getUserFromLocalStorage(): UserInfo {
    const uinfo = JSON.parse(localStorage.getItem('UserInfo'));
    return uinfo as UserInfo;
  }

  signIn(uinfo: UserInfo) {
    localStorage.setItem('UserInfo', JSON.stringify(uinfo));
  }

  signOut() {
    localStorage.setItem('UserInfo', null);
  }
}
