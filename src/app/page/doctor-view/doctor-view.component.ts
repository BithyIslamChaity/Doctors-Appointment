import { Component } from '@angular/core';
import { AppoinmentHistoryComponent } from "../appoinment-history/appoinment-history.component";
import { PatientHistoryComponent } from "../patient-history/patient-history.component";
import { GeneratePrescriptionComponent } from "../generate-prescription/generate-prescription.component";

@Component({
  selector: 'app-doctor-view',
  imports: [AppoinmentHistoryComponent, PatientHistoryComponent, GeneratePrescriptionComponent],
  templateUrl: './doctor-view.component.html',
  styleUrl: './doctor-view.component.css'
})
export class DoctorViewComponent {

}
