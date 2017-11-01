import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { ClinicComponent } from './clinic/clinic.component';
import { TherapistsComponent } from './therapists/therapists.component';
import { AdminClinicComponent } from './admin/admin-clinic/admin-clinic.component';
import { AdminPatientsComponent } from './admin/admin-patients/admin-patients.component';
import { AdminTherapistsComponent } from './admin/admin-therapists/admin-therapists.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    MainContentComponent,
    HomeComponent,
    PatientsComponent,
    ClinicComponent,
    TherapistsComponent,
    AdminClinicComponent,
    AdminPatientsComponent,
    AdminTherapistsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'patients', component: PatientsComponent},
      {path: 'therapists', component: TherapistsComponent},
      {path: 'clinics', component: ClinicComponent},
      {path: 'admin/patients', component: AdminPatientsComponent},
      {path: 'admin/therapists', component: AdminTherapistsComponent},
      {path: 'admin/clinics', component: AdminClinicComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
