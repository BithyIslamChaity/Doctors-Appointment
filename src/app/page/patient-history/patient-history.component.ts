import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../../app.component';


@Component({
  selector: 'app-patient-history',
  imports: [],
  templateUrl: './patient-history.component.html',
  styleUrl: './patient-history.component.css'
})
export class PatientHistoryComponent implements OnInit {
  records: Patient[]=[];


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.records = JSON.parse(localStorage.getItem('records') || '[]');
  }

  addNewPatient():void{
    this.router.navigate(['/patient-history'],
       { state: { patient: new Patient(0,'','','','','','','','','') } });
  }
}
