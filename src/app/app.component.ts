import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentComponent } from "./payments/payment/payment.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaymentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doctors-appointment';
}

// export class Doctor{
//   doctorId: number;
//   doctorName: string;
//   doctorDept: string;
//   doctorFee: number;
//   doctorDegree: string;
//   isAvailable: boolean;


//   constructor(
//     doctorId: number,
//   doctorName: string,
//   doctorDept: string,
//   doctorFee: number,
//   doctorDegree: string,
//   isAvailable: boolean
//   ){
//     this.doctorId = doctorId;
//     this.doctorName = doctorName;
//     this.doctorDept = doctorDept;
//     this.doctorFee = doctorFee;
//     this.doctorDegree = doctorDegree;
//     this.isAvailable = isAvailable;
//   }
// }

// export class BookAppoinment{
//   appoinmentID: number;
//   customerName: string;
//   customerAge: number;
//   appoinmentDate: Date;
//   doctor: Doctor;

//   constructor(
//     appoinmentID: number,
//   customerName: string,
//   customerAge: number,
//   appoinmentDate: Date,
//   doctor: Doctor
//   ){
// this.appoinmentID = appoinmentID;
// this.customerName = customerName;
// this.customerAge = customerAge;
// this.appoinmentDate = appoinmentDate;
// this.doctor = doctor;
//   }
// }

export class Patient{
  id: number;
  name: string;
  date: string;
  visitReason: string;
  diagnosis: string;
  medication: string;
  prescribedTests: string;
  notes: string;
  doctorName: string;
  previousAppointments: string;

  constructor(id: number, name: string, date: string, visitReason: string, diagnosis: string, medication: string, prescribedTests: string, notes: string, doctorName: string, previousAppointments: string){
    this.id = id;
    this.name = name;
    this.date = date;
    this.visitReason = visitReason;
    this.diagnosis = diagnosis;
    this.medication = medication;
    this.prescribedTests = prescribedTests;
    this.notes = notes;
    this.doctorName = doctorName;
    this.previousAppointments = previousAppointments; 
  }
}