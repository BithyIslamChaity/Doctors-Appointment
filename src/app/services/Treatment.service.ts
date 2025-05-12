import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Treatment } from '../model/Treatment';


@Injectable({
  providedIn: 'root',
})
export class TreatmentService {
  private apiUrl = 'http://localhost:8080/api/treatments';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(this.apiUrl);
  }

  getById(id: number): Observable<Treatment> {
    return this.http.get<Treatment>(`${this.apiUrl}/${id}`);
  }

  create(treatment: Treatment): Observable<Treatment> {
    return this.http.post<Treatment>(this.apiUrl, treatment);
  }

  update(id: number, treatment: Treatment): Observable<Treatment> {
    return this.http.put<Treatment>(`${this.apiUrl}/${id}`, treatment);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
