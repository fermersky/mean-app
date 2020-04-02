import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hint } from '../models/hint';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class HintsService {
  private baseUrl = 'http://localhost:3000/api/hints';

  constructor(private http: HttpClient, private users: UsersService) {}

  getByAuthor(author): Observable<Hint[]> {
    const url = `${this.baseUrl}/author/${author}`;
    return this.http.get<Hint[]>(url);
  }

  getBySlug(slug): Observable<Hint> {
    const url = `${this.baseUrl}/slug/${slug}`;
    return this.http.get<Hint>(url);
  }

  postHint(
    title: string,
    tags: string[],
    author: string,
    user_id: string
  ): Observable<Object> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.users.getUserFromLocalStorage().token
    });

    return this.http.post(
      this.baseUrl,
      { title, tags, author, user_id },
      { headers }
    );
  }
}
