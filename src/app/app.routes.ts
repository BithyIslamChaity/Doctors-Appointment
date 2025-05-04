import { Routes } from '@angular/router';
import { AddDoctorComponent } from './page/add-doctor/add-doctor.component';
import { ViewDoctorComponent } from './page/view-doctor/view-doctor.component';
import { BookAppoinmentComponent } from './page/book-appoinment/book-appoinment.component';
import { AppoinmentHistoryComponent } from './page/appoinment-history/appoinment-history.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';

export const routes: Routes = [
    
    {path: 'add-doctor', component: AddDoctorComponent},
    {path: 'view-doctor', component: ViewDoctorComponent},
    {path: 'book-appoinment', component: BookAppoinmentComponent},
    {path: 'appoinment-history', component: AppoinmentHistoryComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', redirectTo: 'view-doctor'},

];
