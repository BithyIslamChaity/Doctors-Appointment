import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PatientProfile {
  id?: number;
  patientId: number;
  fullName: string;
  dateOfBirth: string;
  gender: string;
  phoneNumber: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatientProfileService {
  private apiUrl = 'http://localhost:8080/api/patient-profiles';

  constructor(private http: HttpClient) {}

  getAll(): Observable<PatientProfile[]> {
    return this.http.get<PatientProfile[]>(this.apiUrl);
  }

  getById(id: number): Observable<PatientProfile> {
    return this.http.get<PatientProfile>(`${this.apiUrl}/${id}`);
  }

  create(profile: PatientProfile): Observable<PatientProfile> {
    return this.http.post<PatientProfile>(this.apiUrl, profile);
  }

  update(id: number, profile: PatientProfile): Observable<PatientProfile> {
    return this.http.put<PatientProfile>(`${this.apiUrl}/${id}`, profile);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
