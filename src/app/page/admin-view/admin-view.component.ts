import { Component } from '@angular/core';
import { AddDoctorComponent } from "../add-doctor/add-doctor.component";
import { Patient } from '../../app.component';
import { PatientFormComponent } from '../patient-form/patient-form.component';
import { AddPatientComponent } from "../add-patient/add-patient.component";


@Component({
  selector: 'app-admin-view',
  imports: [PatientFormComponent, AddDoctorComponent, AddPatientComponent],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css'
})
export class AdminViewComponent {

}
