import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-doctor',
  imports: [],
  templateUrl: './list-doctor.component.html',
  styleUrl: './list-doctor.component.css'
})
export class ListDoctorComponent implements OnInit {



  isUpdate = false;
  users: User[] = [];

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
        (this.users = data);
        console.log(this.users)
      },
      error: (err) => console.error('Failed to load doctors:', err),
    });
  }

  makeAppointment(doctor: User) {
    this.router.navigate(['/book-appointment'], { state: { doctor } });
  }
}
