import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from '../model/medicine';


@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private apiUrl = 'http://localhost:8080/api/medicines';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.apiUrl);
  }

  getById(id: number): Observable<Medicine> {
    return this.http.get<Medicine>(`${this.apiUrl}/${id}`);
  }

  create(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(this.apiUrl, medicine);
  }

  update(id: number, medicine: Medicine): Observable<Medicine> {
    return this.http.put<Medicine>(`${this.apiUrl}/${id}`, medicine);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
