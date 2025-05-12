// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// import { NgFor } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Doctor } from '../../model/doctor';

// @Component({
//   selector: 'app-book-appoinment',
//   imports: [NgFor, FormsModule],
//   templateUrl: './book-appoinment.component.html',
//   styleUrl: './book-appoinment.component.css'
// })
// export class BookAppoinmentComponent implements OnInit {


//   doctors: Doctor[] = [];
//   doctor: Doctor = new Doctor(0, '', '', 0, '', false);
//   bookingApp: BookAppoinment[] = [];
//   bookAppoinment: BookAppoinment = new BookAppoinment(0, '', 0, new Date, this.doctor);
//   bookingID: number | null = null;
//   isUpdate = true;



//   constructor(private router: Router) {
    
//   }
//   ngOnInit(): void {

//     let allBookings = JSON.parse(localStorage.getItem('appoinmentbook') || '[]');
//     this.bookingApp = allBookings;
//     let allDoctors = JSON.parse(localStorage.getItem('doctors') || '[]');
//     this.doctors = allDoctors;

//     const navigation = this.router.getCurrentNavigation();
//     if (navigation?.extras?.state?.['doctor']) {
//       this.doctor = navigation.extras.state['doctor'];
//     }
//   }



//   appoinment(): void {

   
//     this.bookAppoinment.doctor = this.doctor;

//     this.bookingApp.push(this.bookAppoinment);
//     localStorage.setItem('appoinmentbook', JSON.stringify(this.bookingApp));



  
//     if (confirm(`Do you want to Book Appoinment? \nDoctor Fee: ${this.doctor.doctorFee}`)) {
//       alert("Booked Appoinment successfully!");
//     }



//     this.bookAppoinment = new BookAppoinment(0, '', 0, new Date, new Doctor(0, '', '', 0, '', false));
//     this.doctor = new Doctor(0, '', '', 0, '', false);
//     this.isUpdate = false;
//     this.bookingID = null;
//   }



//   editAppoinment(bookAppoinment: BookAppoinment, index: number): void {
//     this.bookAppoinment = { ...bookAppoinment }; 
//     this.bookingID = index; 
//     this.isUpdate = true; 
//   }

//   deleteBooking(index: number): void {
//     if (confirm('Are you sure you want to delete this booking?')) {
//       this.bookingApp.splice(index, 1); 
//       localStorage.setItem('appoinmentbook', JSON.stringify(this.bookingApp)); 
//     }

//   }

// }


import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/Appointment.service';
import { Appointment } from '../../model/Appointment';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-appoinment',
  imports: [NgFor, FormsModule],
  templateUrl: './book-appoinment.component.html',
  styleUrl: './book-appoinment.component.css'
})
export class BookAppoinmentComponent  {

//   cor: Appointment = new Appointment();
// };

//  constructor(private http: HttpClient) {}

//   onSubmit() {
//     if (this.isUpdate) {
//       // Update course logic
//       this.courseService.updateCourse(this.cor.id, this.cor).subscribe({
//         next: () => {
//           this.router.navigate(['/course-list']);
//         },
//         error: (err) => {
//           alert('Failed to update course: ' + err.message);
//           console.error(err);
//         },
//       });
//     } else {
//       // Create course logic
//       this.courseService.createCourse(this.cor).subscribe({
//         next: () => {
//           this.router.navigate(['/course-list']);
//           this.cor = new Course(); // Reset the form model
//         },
//         error: (err) => {
//           alert('Failed to create course: ' + err.message);
//           console.error(err);
//         },
//       });
//     }
  }

