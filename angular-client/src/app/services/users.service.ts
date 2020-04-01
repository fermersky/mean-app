import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../models/user-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'http://localhost:3000/api/users';
  constructor(private http: HttpClient) {}

  getUserFromLocalStorage(): UserInfo {
    const uinfo = JSON.parse(localStorage.getItem('UserInfo'));
    return uinfo as UserInfo;
  }

  getUserImage(userId): Observable<Blob> {
    const url = this.baseUrl + '/img/' + userId;
    return this.http.get(url, { responseType: 'blob' });
  }
}
