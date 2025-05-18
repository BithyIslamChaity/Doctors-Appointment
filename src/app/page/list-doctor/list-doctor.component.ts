import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../../model/doctor';
import { UserService } from '../../services/user.service';
import { User } from '../../model/User';

@Component({
  selector: 'app-list-doctor',
  imports: [],
  templateUrl: './list-doctor.component.html',
  styleUrl: './list-doctor.component.css'
})
export class ListDoctorComponent {
  // title = 'Anenstheshologist';
  // imageSrc = 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg';
  // specialtyLink = '/consult-now';
  // fontWeight = 'font-bold';


   isUpdate = false;
     doctors: User[] = [];
  
     constructor(
       private router: Router,
       
       private userService: UserService
     ) {
      
     }
  
     ngOnInit() {
       this.getDoctors();
     }
  
     getDoctors() {
       this.userService.getUserByRole('DOCTOR').subscribe({
         next: (data) => {
           (this.doctors = data);
           console.log(this.doctors)
         },
         error: (err) => console.error('Failed to load teachers:', err),
       });
     }
}
