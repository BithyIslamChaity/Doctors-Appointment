import { Routes } from '@angular/router';

import { CreateDoctorPatientComponent } from './page/admin/create-doctor-patient/create-doctor-patient.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';

export const routes: Routes = [
    
    {path: 'add-medicine', component: AddMedicineComponent},
    {path: 'create-doctor-patient', component: CreateDoctorPatientComponent},
    {path: '**', redirectTo: 'view-doctor'},

];
