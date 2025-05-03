import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-doctor-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {
  selectedSpecialty: string = 'All';

  specialties: string[] = [
    'All',
    'Cardiologist',
    'Neurologist',
    'Dermatologist',
    'Orthopedic Surgeon',
    'Pediatrician',
    'Gynecologist',
    'Psychiatrist',
    'General Physician',
    'Gastroenterologist',
    'Nephrologist',
    'Urologist',
    'Oncologist',
    'Endocrinologist',
    'Pulmonologist',
    'Rheumatologist',
    'Hematologist',
    'Ophthalmologist',
    'Anesthesiologist',
    'Radiologist',
    'Surgeon (General / Specialized)',
    'Pathologist',
    'Plastic Surgeon',
    'Dentist / Oral Surgeon',
    'Allergist / Immunologist',
    'Hepatologist',
    'Infectious Disease Specialist',
    'Neonatologist',
    'Family Medicine Specialist'
  ];

  doctors = [
    {
      name: 'Dr. Younus',
      specialty: 'Cardiologist',
      image: 'doctors/doctor.jpeg',
      chamber: 'Child Health Clinic, Mohammadpur',
      schedule: 'Daily, 10:00 AM - 1:00 PM',
      fee: '৳700'
    },
    {
      name: 'Dr. Farhana Islam',
      specialty: 'Gynecologist',
      image: 'doctors/doctorf1.png',
      chamber: 'Heart Care Clinic, Dhanmondi',
      schedule: 'Sat - Thu, 10:00 AM - 1:00 PM',
      fee: '৳800'
    },
    {
      name: 'Dr. Abdullah Mamun',
      specialty: 'Neurologist',
      image: 'doctors/doctor1.png',
      chamber: 'Neuro Center, Uttara',
      schedule: 'Sun - Wed, 4:00 PM - 7:00 PM',
      fee: '৳1000'
    },
    {
      name: 'Dr. Liza Rahman',
      specialty: 'Gynecologist',
      image: 'doctors/doctorf2.jpeg',
      chamber: 'Skin Care Hospital, Banani',
      schedule: 'Mon - Thu, 9:00 AM - 12:00 PM',
      fee: '৳600'
    },
    {
      name: 'Dr. Tanvir Hasan',
      specialty: 'Orthopedic Surgeon',
      image: 'doctors/doctor2.png',
      chamber: 'Bone & Joint Center, Mirpur',
      schedule: 'Sat - Tue, 5:00 PM - 8:00 PM',
      fee: '৳900'
    },
    {
      name: 'Dr. Nafisa Jahan',
      specialty: 'Cardiologist',
      image: 'doctors/doctorf4.jpg',
      chamber: 'Child Health Clinic, Mohammadpur',
      schedule: 'Daily, 10:00 AM - 1:00 PM',
      fee: '৳700'
    },
    {
      name: 'Dr. Dim Pose',
      specialty: 'Cardiologist',
      image: 'doctors/doctor3.png',
      chamber: 'Heart Care Clinic, Dhanmondi',
      schedule: 'Sat - Thu, 10:00 AM - 1:00 PM',
      fee: '৳800'
    },
    {
      name: 'Dr. Munjur Alam',
      specialty: 'Neurologist',
      image: 'doctors/doctor4.jpeg',
      chamber: 'Neuro Center, Uttara',
      schedule: 'Sun - Wed, 4:00 PM - 7:00 PM',
      fee: '৳1000'
    },
    {
      name: 'Dr. Morjina Khatun',
      specialty: 'Orthopedic Surgeon',
      image: 'doctors/doctorf3.PNG',
      chamber: 'Skin Care Hospital, Banani',
      schedule: 'Mon - Thu, 9:00 AM - 12:00 PM',
      fee: '৳600'
    },
    {
      name: 'Dr. Zahid Hasan Nahid',
      specialty: 'Orthopedic Surgeon',
      image: 'doctors/doctor5.png',
      chamber: 'Bone & Joint Center, Mirpur',
      schedule: 'Sat - Tue, 5:00 PM - 8:00 PM',
      fee: '৳900'
    },
    {
      name: 'Dr. Bir Bahadur',
      specialty: 'Pediatrician',
      image: 'doctors/doctor6.png',
      chamber: 'Child Health Clinic, Mohammadpur',
      schedule: 'Daily, 10:00 AM - 1:00 PM',
      fee: '৳700'
    },
    {
      name: 'Dr. Bahubali',
      specialty: 'Dermatologist',
      image: 'doctors/doctor7.jpg',
      chamber: 'Child Health Clinic, Mohammadpur',
      schedule: 'Daily, 10:00 AM - 1:00 PM',
      fee: '৳700'
    },{
      name: 'Dr. Katappa',
      specialty: 'Dermatologist',
      image: 'doctors/doctor8.png',
      chamber: 'Child Health Clinic, Mohammadpur',
      schedule: 'Daily, 10:00 AM - 1:00 PM',
      fee: '৳700'
    },{
      name: 'Dr. Enginee farookh',
      specialty: 'Neurologist',
      image: 'doctors/doctor11 .jpeg',
      chamber: 'Child Health Clinic, Mohammadpur',
      schedule: 'Daily, 10:00 AM - 1:00 PM',
      fee: '৳700'
    },{
      name: 'Dr. Ghum Babu',
      specialty: 'Neurologist',
      image: 'doctors/doctor12.jpeg',
      chamber: 'Child Health Clinic, Mohammadpur',
      schedule: 'Daily, 10:00 AM - 1:00 PM',
      fee: '৳700'
    }
  ];

  get filteredDoctors() {
    if (this.selectedSpecialty === 'All') return this.doctors;
    return this.doctors.filter(doctor => doctor.specialty === this.selectedSpecialty);
  }
}
