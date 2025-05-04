import { Component } from '@angular/core';

@Component({
  selector: 'app-list-doctor',
  imports: [],
  templateUrl: './list-doctor.component.html',
  styleUrl: './list-doctor.component.css'
})
export class ListDoctorComponent {
  title = 'Anenstheshologist';
  imageSrc = 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg';
  specialtyLink = '/consult-now';
  fontWeight = 'font-bold';
}
