import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterRequest, UserService } from '../../services/user.service';
import { PatientFormComponent } from '../patient-form/patient-form.component';


@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [FormsModule, CommonModule, PatientFormComponent],
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  patient: RegisterRequest = {
    email: '',
    password: '',
    role: 'PATIENT',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };
  confirmPassword = '';
  submissionError = '';

  constructor(private userService: UserService, private router: Router) {}

  addPatient() {
    if (this.patient.password !== this.confirmPassword) {
      this.submissionError = 'Passwords do not match.';
      alert(this.submissionError);
      return;
    }

    this.userService.registerUser(this.patient).subscribe({
      next: () => {
        alert('Patient created successfully!');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error creating patient:', error);
        this.submissionError = error.error?.message || 'An error occurred.';
        alert(this.submissionError);
      }
    });
  }
}
