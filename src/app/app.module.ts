import { AuthGuardsService } from './shared/guards/auth-guards.service';
import { PatientsModule } from './patients/patients.module';
import { TherapistsModule } from './therapists/therapists.module';
import { ClinicsModule } from './clinics/clinics.module';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { ClinicComponent } from './clinics/clinic.component';
import { TherapistsComponent } from './therapists/therapists.component';
import { LoginComponent } from './shared/login/login.component';

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
    ]),
    AdminModule,
    ClinicsModule,
    TherapistsModule,
    PatientsModule
  ],
  providers: [AuthGuardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
