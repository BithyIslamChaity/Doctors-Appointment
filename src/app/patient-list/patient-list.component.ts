import { Component } from '@angular/core';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-patient-list',
  imports: [],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent {
isUpdate = false;
     users: User[] = [];
patient: any;
  
     constructor(
       private router: Router,
       
       private userService: UserService
     ) {
      
     }
  
     ngOnInit() {
       this.getPatients();
     }
  
     getPatients() {
       this.userService.getUserByRole('PATIENT').subscribe({
         next: (data) => {
           (this.users = data);
           console.log(this.users)
         },
         error: (err) => console.error('Failed to load patients:', err),
       });
     }
}


