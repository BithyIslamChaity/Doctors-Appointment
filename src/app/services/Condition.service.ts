import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Condition } from '../model/Condition';

@Injectable({
  providedIn: 'root'
})
export class ConditionService {
  private apiUrl = 'http://localhost:8080/api/conditions';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Condition[]> {
    return this.http.get<Condition[]>(this.apiUrl);
  }

  getById(id: number): Observable<Condition> {
    return this.http.get<Condition>(`${this.apiUrl}/${id}`);
  }

  create(condition: Condition): Observable<Condition> {
    return this.http.post<Condition>(this.apiUrl, condition);
  }

  update(id: number, condition: Condition): Observable<Condition> {
    return this.http.put<Condition>(`${this.apiUrl}/${id}`, condition);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
