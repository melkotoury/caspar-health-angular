import { TherapistsService } from './../services/therapists.service';
import { ClinicsService } from './../services/clinics.service';
import { AdminTherapistsComponent } from './admin-therapists/admin-therapists.component';
import { AdminPatientsComponent } from './admin-patients/admin-patients.component';
import { AdminComponent } from './admin/admin.component';
import { AdminMainContentComponent } from './admin-main-content/admin-main-content.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminClinicComponent } from './admin-clinic/admin-clinic.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminMainContentComponent,
    AdminSidebarComponent,
    AdminClinicComponent,
    AdminPatientsComponent,
    AdminTherapistsComponent,
    AdminDashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ClinicsService,
    TherapistsService
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
