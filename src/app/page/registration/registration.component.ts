import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest, UserService } from '../../services/user.service';
import { PatientFormComponent } from "../patient-form/patient-form.component";

@Component({
  selector: 'app-registration',
  imports: [FormsModule, CommonModule, PatientFormComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  user: RegisterRequest = {
    email: '',
    password: '',
    role: 'PATIENT',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };
  confirmPassword: string = '';
  registrationSuccess = false;
  registrationError = '';

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  addPatient() {
    if (this.user.password === this.confirmPassword) {
      this.userService.registerUser(this.user).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          this.registrationSuccess = true;
          this.registrationError = '';
          alert('Registration successful! Please log in.');
          this.router.navigate(['/']);
        },
        error: (error: Error) => {
          console.error('Registration error:', error.message);
          this.registrationError = error.message;
          this.registrationSuccess = false;
          alert(error.message);
        },
      });
    } else {
      this.registrationError = 'Passwords do not match.';
      this.registrationSuccess = false;
      alert('Passwords do not match.');
    }
  }
}
