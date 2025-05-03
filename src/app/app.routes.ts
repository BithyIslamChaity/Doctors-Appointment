import { Routes } from '@angular/router';

import { CreateDoctorPatientComponent } from './page/admin/create-doctor-patient/create-doctor-patient.component';

export const routes: Routes = [
    

    {path: 'create-doctor-patient', component: CreateDoctorPatientComponent},
    {path: '**', redirectTo: 'view-doctor'},

];
