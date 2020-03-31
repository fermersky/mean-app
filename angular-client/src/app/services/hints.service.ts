import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hint } from '../models/hint';

@Injectable({
  providedIn: 'root'
})
export class HintsService {
  private baseUrl = 'http://localhost:3000/api/hints';

  constructor(private http: HttpClient) {}

  getByAuthor(author): Observable<Hint[]> {
    const url = `${this.baseUrl}/author/${author}`;
    return this.http.get<Hint[]>(url);
  }
}
