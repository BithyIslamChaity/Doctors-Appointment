import { Component, OnInit } from '@angular/core';

import { Appointment } from '../../model/Appointment';
import { Router } from '@angular/router';
import { AppointmentService } from '../../services/Appointment.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-book-appointment',
  imports: [FormsModule, NgFor],  
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  appointments: Appointment[] = [];
  appointment: Appointment = new Appointment();
  isUpdate: boolean = false;

  
doctors: any;
patients: any;

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentService.getAllAppointments().subscribe({
      next: (data) => {
        this.appointments = data;
      },
      error: (err) => {
        console.error('Error loading appointments:', err);
      }
    });
  }

  onSubmit() {
    if (this.isUpdate && this.appointment.id) {
      this.appointmentService.updateAppointment(this.appointment.id, this.appointment).subscribe({
        next: () => {
          this.loadAppointments();
          this.resetForm();
        },
        error: (err) => {
          alert('Failed to update appointment: ' + err.message);
        }
      });
    } else {
      this.appointmentService.createAppointment(this.appointment).subscribe({
        next: (data) => {
          this.appointments.push(data); // Add to list
          this.resetForm();
        },
        error: (err) => {
          alert('Failed to create appointment: ' + err.message);
        }
      });
    }
  }

  deleteAppointment(id: number) {
    this.appointmentService.deleteAppointment(id).subscribe({
      next: () => {
        this.appointments = this.appointments.filter(a => a.id !== id);
      },
      error: (err) => {
        alert('Failed to delete appointment: ' + err.message);
      }
    });
  }

  editAppointment(appointment: Appointment) {
    this.appointment = { ...appointment };
    this.isUpdate = true;
  }

  resetForm() {
    this.appointment = new Appointment();
    this.isUpdate = false;
  }
}
