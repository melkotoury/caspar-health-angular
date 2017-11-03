import { AdminTherapistsComponent } from './admin-therapists/admin-therapists.component';
import { AdminPatientsComponent } from './admin-patients/admin-patients.component';
import { AdminComponent } from './admin/admin.component';
import { AdminMainContentComponent } from './admin-main-content/admin-main-content.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminClinicComponent } from './admin-clinic/admin-clinic.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminMainContentComponent,
    AdminNavbarComponent,
    AdminClinicComponent,
    AdminPatientsComponent,
    AdminTherapistsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
