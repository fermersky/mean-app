import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'http://localhost:3000/api/users';
  constructor(private http: HttpClient) {}

  register(name, email, password): Observable<Object> {
    return this.http.post(this.baseUrl + '/register', {
      name,
      email,
      password,
      img_path: 'ava.png'
    });
  }
}
