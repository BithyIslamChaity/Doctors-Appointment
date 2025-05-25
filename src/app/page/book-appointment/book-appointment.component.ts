import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from '../../model/Appointment';
import { AppointmentService } from '../../services/Appointment.service';
import { User } from '../../model/User';

@Component({
  selector: 'app-book-appointment',
  imports: [FormsModule, CommonModule],
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  appointments: Appointment[] = [];
  appointment: Appointment = new Appointment();
  isUpdate: boolean = false;

  doctor!: User;
  doctors: any;
  patients: any;

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.doctor = navigation?.extras.state?.['doctor'];

    if (this.doctor) {
      this.appointment.doctorId = this.doctor.id;
      // this.appointment.doctorName = `${this.doctor.firstName} ${this.doctor.lastName}`;
    } else {
      console.warn('Doctor data not found in route state.');
    }
  }

  ngOnInit(): void {
    this.decodeToken();
    this.loadAppointments();
  }

  formatDateForInput(date: Date | string): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  decodeToken() {
    const token = localStorage.getItem('access_token');
    if (token) {
      const payloadBase64 = token.split('.')[1];
      const payloadJson = atob(payloadBase64);
      const payload = JSON.parse(payloadJson);
      const userId = payload.id;
      this.appointment.patientId = userId;
    }
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
    this.appointment.scheduledTime = this.formatDateForInput(this.appointment.scheduledTime || new Date());
    debugger
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
      debugger
      this.appointmentService.createAppointment(this.appointment).subscribe({
        next: (data) => {
          this.appointments.push(data);
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
