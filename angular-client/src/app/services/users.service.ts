import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUserFromLocalStorage(): UserInfo {
    const uinfo = JSON.parse(localStorage.getItem('UserInfo'));
    return uinfo as UserInfo;
  }
}
