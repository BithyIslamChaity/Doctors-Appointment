import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [
    FormsModule,CommonModule,ReactiveFormsModule
  ],
  selector: 'app-generate-prescription',
  templateUrl: './generate-prescription.component.html',
  styleUrls: ['./generate-prescription.component.css']
})
export class GeneratePrescriptionComponent {
  prescriptionForm: FormGroup;

  investigation1 = 'Blood Test';
  advice = 'Take proper rest and maintain a healthy diet.';
  followUpDate = '2025-05-15';

  constructor(private fb: FormBuilder) {
    this.prescriptionForm = this.fb.group({
      prescriptionId: [''],
      patientName: [''],
      doctorId: [''],
      medicineName: [''],
      dosage: [''],
      duration: ['']
    });
  }

  
}
