import { Routes } from '@angular/router';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { GeneratePrescriptionComponent } from './generate-prescription/generate-prescription.component';
import { CreateDoctorPatientComponent } from './page/admin/create-doctor-patient/create-doctor-patient.component';
import { ListDoctorComponent } from './page/list-doctor/list-doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PatientHistoryComponent } from './page/patient-history/patient-history.component';

export const routes: Routes = [
    
//     {path: 'add-doctor', component: AddDoctorComponent},
//     {path: 'view-doctor', component: ViewDoctorComponent},
//     {path: 'book-appoinment', component: BookAppoinmentComponent},
//     {path: 'appoinment-history', component: AppoinmentHistoryComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},

    {path: 'add-medicine', component: AddMedicineComponent},    
    {path: 'generate-prescription', component: GeneratePrescriptionComponent },
    {path: 'create-doctor-patient', component: CreateDoctorPatientComponent},
    {path: 'list-doctor', component: ListDoctorComponent},
    {path: 'patient-history', component: PatientHistoryComponent},
    {path: '**', redirectTo: 'view-doctor'},
    {path: 'doctor-list', component: DoctorListComponent},

];
