import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Appointment } from '../../model/Appointment';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appoinment-history',
  imports: [NgFor],
  templateUrl: './appoinment-history.component.html',
  styleUrl: './appoinment-history.component.css'
})
export class AppoinmentHistoryComponent  {

//   bookings: Appointment[] = [];

//   ngOnInit(): void {
//     let allBookings = JSON.parse(localStorage.getItem('appoinmentbook') || '[]');
//     this.bookings = allBookings;
//   }

//   deleteBooking(index: number): void {
//     if (confirm('Are you sure you want to delete this booking?')) {
//       this.bookings.splice(index, 1); // Remove the car at the given index
//       localStorage.setItem('appoinmentbook', JSON.stringify(this.bookings)); // Save updated list to localStorage
//     }
//   }

// }


  appointmentForm: FormGroup;
  appointments: any[] = [];
  nextId = 1;

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      patientName: [''],
      doctorName: [''],
      scheduledTime: ['']
    });
  }

  submitAppointment() {
    const formValue = this.appointmentForm.value;

    const newAppointment = {
      id: this.nextId++,
      patient: { id: 0, name: formValue.patientName },
      doctor: { id: 0, name: formValue.doctorName },
      scheduledTime: formValue.scheduledTime
    };

    this.appointments.push(newAppointment);
    this.appointmentForm.reset();
  }
}
