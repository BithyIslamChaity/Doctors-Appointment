import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-doctor',
  imports: [FormsModule],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent {
  doctor = {
    name: '',
    email: '',
    phone: '',
    clinicAddress: '',
    specialization: '',
    licenseNumber: '',
    yearsOfExperience: null
  };

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    alert('Feature not implemented yet');
  }
}