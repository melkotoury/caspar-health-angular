import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {AuthGuardsService} from './../shared/auth/auth-guards.service';
import {AdminComponent} from './admin/admin.component';

import {AdminClinicComponent} from './admin-clinic/admin-clinic.component';
import {AdminTherapistsComponent} from './admin-therapists/admin-therapists.component';
import {AdminPatientsComponent} from './admin-patients/admin-patients.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardsService],
    children: [
      {
        path: 'admin',
        canActivateChild: [AuthGuardsService],
        children: [
          {
            path: 'clinics',
            component: AdminClinicComponent
          }, {
            path: 'therapists',
            component: AdminTherapistsComponent
          }, {
            path: 'patients',
            component: AdminPatientsComponent
          }, {
            path: 'dashboard',
            component: AdminDashboardComponent
          }

        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}