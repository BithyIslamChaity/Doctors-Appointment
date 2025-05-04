import { Routes } from '@angular/router';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';
import { GeneratePrescriptionComponent } from './page/generate-prescription/generate-prescription.component';
import { CreateDoctorPatientComponent } from './page/admin/create-doctor-patient/create-doctor-patient.component';
import { ListDoctorComponent } from './page/list-doctor/list-doctor.component';
import { DoctorListComponent } from './page/doctor-list/doctor-list.component';
import { PatientHistoryComponent } from './page/patient-history/patient-history.component';
import { AddMedicineComponent } from './page/about/add-medicine/add-medicine.component';
import { LoginComponent } from './page/login/login.component';
import { PrivateComponent } from './page/private/private.component';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: '',
        component: PrivateComponent,
        canActivate: [authGuard],
        children: [
            { path: 'home', component: ListDoctorComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'add-medicine', component: AddMedicineComponent },
            { path: 'generate-prescription', component: GeneratePrescriptionComponent },
            { path: 'create-doctor-patient', component: CreateDoctorPatientComponent },
            { path: 'patient-history', component: PatientHistoryComponent },
            { path: 'doctor-list', component: DoctorListComponent },
            { path: '**', redirectTo: 'home' },
        ],
    },
];

