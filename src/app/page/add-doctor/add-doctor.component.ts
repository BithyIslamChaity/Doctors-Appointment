import { Component, LOCALE_ID, NgModule, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, registerLocaleData } from '@angular/common';
import { Doctor } from '../../model/doctor';
import localeBn from '@angular/common/locales/bn';
import { UserService } from '../../services/user.service';
import { User } from '../../model/User';

registerLocaleData(localeBn, 'bn');
@Component({
  selector: 'app-add-doctor',
  imports: [FormsModule, NgFor, NgClass],

  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent implements OnInit {


  constructor(private router: Router, private userService: UserService) { }
  ngOnInit(): void {
    this.getAllUsers();
  }


deleteDoctor() {
throw new Error('Method not implemented.');
}
editDoctor() {
throw new Error('Method not implemented.');
}

  doctor = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    specialization: '',
    licenseNumber: '',
    doctorDept: '',
    doctorFee: null,
    doctorDegree: '',
    isAvailable: true
  };

  doctors: any[] = [];

  doctorList: User[] = [];

  departments = [
    { value: 'Pediatricians', label: '👶 Pediatricians' },
    { value: 'Geriatric medicine', label: '👵 Geriatric Medicine' },
    { value: 'Dermatologists', label: '🧴 Dermatologists' },
    { value: 'Infectious disease', label: '🦠 Infectious Disease' },
    { value: 'Ophthalmologists', label: '👁️ Ophthalmologists' },
    { value: 'Obstetrician/gynecologists', label: '🤰 Obstetrician/Gynecologists' },
    { value: 'Cardiologists', label: '❤️ Cardiologists' },
    { value: 'Endocrinologists', label: '💉 Endocrinologists' },
    { value: 'Gastroenterologists', label: '🍽️ Gastroenterologists' },
    { value: 'Nephrologists', label: '🧑‍⚕️ Nephrologists' },
    { value: 'Urologists', label: '🚻 Urologists' },
    { value: 'Otolaryngologists', label: '👂 Otolaryngologists' },
    { value: 'Oncologists', label: '🎗️ Oncologists' }
  ];

  onSubmit(): void {
    
    if (this.isDoctorValid(this.doctor)) {
      this.doctors.push({ ...this.doctor }); // Add a copy to the list
      this.resetForm();
    } else {
      alert('Please fill out all required fields.');
    }
  }

  isDoctorValid(doctor: any): boolean {
    return doctor.firstName && doctor.lastName && doctor.email && doctor.specialization &&
           doctor.licenseNumber && doctor.doctorDept && doctor.doctorFee && doctor.doctorDegree;
  }

  resetForm(): void {
    this.doctor = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      specialization: '',
      licenseNumber: '',
      doctorDept: '',
      doctorFee: null,
      doctorDegree: '',
      isAvailable: true
    };
  }
  isUpdate = false; // Flag to check if we are in update mode
  currentIndex: number | null = null; // Store the index of the doctor being edited

  getAllUsers() {
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        const filteredDoctorList: User[] = data.filter(user => user.role === 'Doctor');
        this.doctorList = filteredDoctorList;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  
  }

}
