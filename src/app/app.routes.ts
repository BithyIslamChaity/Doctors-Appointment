import { Routes } from '@angular/router';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';
import { GeneratePrescriptionComponent } from './page/generate-prescription/generate-prescription.component';
import { AddDoctorComponent } from './page/add-doctor/add-doctor.component';
import { ListDoctorComponent } from './page/list-doctor/list-doctor.component';
import { DoctorListComponent } from './page/doctor-list/doctor-list.component';
import { PatientHistoryComponent } from './page/patient-history/patient-history.component';

import { LoginComponent } from './page/login/login.component';
import { PrivateComponent } from './page/private/private.component';
import { authGuard } from './core/auth.guard';
import { RegistrationComponent } from './page/registration/registration.component';

import { A, B } from '@angular/cdk/keycodes';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddMedicineComponent } from './page/add-medicine/add-medicine.component';
import { BookAppointmentComponent } from './page/book-appointment/book-appointment.component';
import { HeaderComponent } from './page/common/header/header.component';
import { AddPatientComponent } from './page/add-patient/add-patient.component';

export const routes: Routes = [
     { path: '', component: HeaderComponent, },
    // { path: 'register', component: RegistrationComponent },
    // {
    //     path: '',
    //     component: PrivateComponent,
    //     canActivate: [authGuard],
    //     children: [
            {path: 'header', component: HeaderComponent},
            {path: 'admin-dashboard', component:AdminDashboardComponent},
            { path: 'home', component: ListDoctorComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'add-medicine', component: AddMedicineComponent },
            { path: 'generate-prescription', component: GeneratePrescriptionComponent },
            { path: 'add-doctor', component: AddDoctorComponent },
            { path: 'add-patient', component: AddPatientComponent },
            { path: 'patient-history', component: PatientHistoryComponent },
            { path: 'doctor-list', component: DoctorListComponent },
            { path: 'book-appointment', component: BookAppointmentComponent },
            { path: '**', redirectTo: 'header' }
        ]
        // , },
// ];

