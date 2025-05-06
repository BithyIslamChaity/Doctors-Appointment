import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RegisterRequest } from '../../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-patient',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {
  @Input() patient: RegisterRequest = {
    email: '',
    password: '',
    role: 'PATIENT',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };
  @Output() formSubmit = new EventEmitter<void>();

  confirmPassword: string = '';

  submitForm() {
    if (this.patient.password === this.confirmPassword) {
      this.formSubmit.emit();
    }
  }
}
