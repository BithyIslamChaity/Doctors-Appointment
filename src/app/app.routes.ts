import { Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { AddDoctorComponent } from './page/add-doctor/add-doctor.component';
import { ContactComponent } from './page/contact/contact.component';
import { DoctorListComponent } from './page/doctor-list/doctor-list.component';
import { GeneratePrescriptionComponent } from './page/generate-prescription/generate-prescription.component';
import { ListDoctorComponent } from './page/list-doctor/list-doctor.component';
import { PatientHistoryComponent } from './page/patient-history/patient-history.component';

import { authGuard } from './core/auth.guard';
import { LoginComponent } from './page/login/login.component';
import { PrivateComponent } from './page/private/private.component';
import { RegistrationComponent } from './page/registration/registration.component';

import { AddMedicineComponent } from './page/add-medicine/add-medicine.component';

import { AbcComponent } from './abc/abc.component';
import { AddPatientComponent } from './page/add-patient/add-patient.component';
import { AppoinmentHistoryComponent } from './page/appoinment-history/appoinment-history.component';
import { BookAppointmentComponent } from './page/book-appointment/book-appointment.component';
import { HeaderComponent } from './page/common/header/header.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PaymentComponent } from './payments/payment/payment.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    {
        path: '', component: PrivateComponent,
        canActivate: [authGuard],
        children: [
            { path: 'header', component: HeaderComponent },
            // { path: 'admin-dashboard', component: AdminDashboardComponent },
            { path: 'home', component: ListDoctorComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'add-medicine', component: AddMedicineComponent },
            { path: 'generate-prescription', component: GeneratePrescriptionComponent },
            { path: 'add-doctor', component: AddDoctorComponent },
            { path: 'add-patient', component: AddPatientComponent },
            { path: 'patient-history', component: PatientHistoryComponent },
            { path: 'book-appointment', component: BookAppointmentComponent },
            { path: 'doctor-list', component: DoctorListComponent },
            { path: 'abc', component: AbcComponent },
            { path: 'payment', component: PaymentComponent },
            { path: 'appointment-history', component: AppoinmentHistoryComponent },
            { path: 'patient-list', component: PatientListComponent },
            { path: '**', redirectTo: 'home' }
        ]
    }
];


