
import { AdminClinicComponent } from './admin-clinic/admin-clinic.component';
import { AdminTherapistsComponent } from './admin-therapists/admin-therapists.component';
import { AdminPatientsComponent } from './admin-patients/admin-patients.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'admin/patients', component: AdminPatientsComponent},
  {path: 'admin/therapists', component: AdminTherapistsComponent},
  {path: 'admin/clinics', component: AdminClinicComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
