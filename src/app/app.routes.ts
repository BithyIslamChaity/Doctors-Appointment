import { Routes } from '@angular/router';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';
import { GeneratePrescriptionComponent } from './page/generate-prescription/generate-prescription.component';
import { CreateDoctorPatientComponent } from './page/admin/create-doctor-patient/create-doctor-patient.component';
import { ListDoctorComponent } from './page/list-doctor/list-doctor.component';
import { DoctorListComponent } from './page/doctor-list/doctor-list.component';
import { PatientHistoryComponent } from './page/patient-history/patient-history.component';
import { AddMedicineComponent } from './page/about/add-medicine/add-medicine.component';

export const routes: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'add-medicine', component: AddMedicineComponent },
    { path: 'generate-prescription', component: GeneratePrescriptionComponent },
    { path: 'create-doctor-patient', component: CreateDoctorPatientComponent },
    { path: 'list-doctor', component: ListDoctorComponent },
    { path: 'patient-history', component: PatientHistoryComponent },
    { path: '**', redirectTo: 'view-doctor' },
    { path: 'doctor-list', component: DoctorListComponent },
];
