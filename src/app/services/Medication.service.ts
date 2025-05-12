import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medication } from '../model/Medication';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private apiUrl = 'http://localhost:8080/api/medications';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Medication[]> {
    return this.http.get<Medication[]>(this.apiUrl);
  }

  getById(id: number): Observable<Medication> {
    return this.http.get<Medication>(`${this.apiUrl}/${id}`);
  }

  create(medication: Medication): Observable<Medication> {
    return this.http.post<Medication>(this.apiUrl, medication);
  }

  update(id: number, medication: Medication): Observable<Medication> {
    return this.http.put<Medication>(`${this.apiUrl}/${id}`, medication);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
