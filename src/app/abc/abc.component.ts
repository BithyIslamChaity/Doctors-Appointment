import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-abc',
  imports: [],
  templateUrl: './abc.component.html',
  styleUrl: './abc.component.css'
})
export class AbcComponent implements OnInit{
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
     this.userService.getUserByRole('Doctor').subscribe({
       next: (data) => {
         (this.doctors = data);
         console.log(this.doctors)
       },
       error: (err) => console.error('Failed to load teachers:', err),
     });
   }
}
