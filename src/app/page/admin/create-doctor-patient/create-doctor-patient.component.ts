import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Doctor } from '../../../model/doctor';
import { Patient } from '../../../model/patient';

@Component({
  selector: 'app-create-doctor-patient',
  imports: [NgIf, FormsModule, NgClass],
  templateUrl: './create-doctor-patient.component.html',
  styleUrl: './create-doctor-patient.component.css'
})
export class CreateDoctorPatientComponent {
  selectedModal: string | null = null;

  doctor: Doctor = new Doctor(0, '','','','','',0);

  // Form data for patient
  patient: Patient = new Patient(0, '','',0, '');

   // Open modal (either doctor or patient)
   openModal(modalType: string): void {
    this.selectedModal = modalType;
  }

  // Close the modal
  closeModal(): void {
    this.selectedModal = null;
  }

  // Handle doctor form submission
  onSubmitDoctor(): void {
    console.log('Doctor Added:', this.doctor);
    this.resetDoctorForm();
    this.closeModal();
  }

  // Handle patient form submission
  onSubmitPatient(): void {
    console.log('Patient Added:', this.patient);
    this.resetPatientForm();
    this.closeModal();
  }

  // Reset doctor form
  resetDoctorForm(): void {
    this.doctor = new Doctor(0, '','','','','',0);
    
  }

  // Reset patient form
  resetPatientForm(): void {
    this.patient = new Patient(0, '','',0, '');
    
  }
}