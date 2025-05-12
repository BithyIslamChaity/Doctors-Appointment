import { Component } from '@angular/core';
import { StudentService } from './patient.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-patient-view',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './patient-view.component.html',
  styleUrl: './patient-view.component.css'
})
export class PatientViewComponent {
  resources: { [key: string]: string } = {};
  resourceKeys: string[] = [];

  constructor(private patientService: PatientaService) { }

  ngOnInit(): void {
    this.loadResources();
  }

  loadResources() {
    this.studentService.getResources().subscribe({
      next: (data) => {
        this.resources = data;
        this.resourceKeys = Object.keys(data); // <== create keys here
      },
      error: (err) => {
        console.error('Failed to load resources:', err);
      }
    });
  }
}
