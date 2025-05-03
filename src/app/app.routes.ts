import { Routes } from '@angular/router';

import { CreateDoctorPatientComponent } from './page/admin/create-doctor-patient/create-doctor-patient.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { GeneratePrescriptionComponent } from './generate-prescription/generate-prescription.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';

export const routes: Routes = [
    
    {path: 'add-medicine', component: AddMedicineComponent},    
    {path: 'generate-prescription', component: GeneratePrescriptionComponent },
    {path: 'create-doctor-patient', component: CreateDoctorPatientComponent},
    {path: '**', redirectTo: 'view-doctor'},
    {path: 'doctor-list', component: DoctorListComponent},

];
