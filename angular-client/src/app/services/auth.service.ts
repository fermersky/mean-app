import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  httpRegister(name, email, password): Observable<UserInfo> {
    return this.http.post<UserInfo>(this.baseUrl + '/register', {
      name,
      email,
      password
    });
  }

  httpLogin(email, password): Observable<UserInfo> {
    return this.http.post<UserInfo>(this.baseUrl + '/login', {
      email,
      password
    });
  }

  isSignedIn(): boolean {
    const uinfo = JSON.parse(localStorage.getItem('UserInfo'));

    if (uinfo) {
      let payload = uinfo.token.split('.')[1];
      payload = JSON.parse(window.atob(payload));

      if (uinfo) {
        return payload.exp > Date.now() / 1000;
      }
    }

    return false;
  }

  signIn(uinfo: UserInfo) {
    localStorage.setItem('UserInfo', JSON.stringify(uinfo));
  }

  signOut() {
    localStorage.setItem('UserInfo', null);
  }
}
