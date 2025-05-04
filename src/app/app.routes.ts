import { Routes } from '@angular/router';

import { CreateDoctorPatientComponent } from './page/admin/create-doctor-patient/create-doctor-patient.component';
import { PatientHistoryComponent } from './page/patient-history/patient-history.component';

export const routes: Routes = [
    

    {path: 'create-doctor-patient', component: CreateDoctorPatientComponent},
    {path: 'patient-history', component: PatientHistoryComponent},
    {path: '**', redirectTo: 'view-doctor'},

];
