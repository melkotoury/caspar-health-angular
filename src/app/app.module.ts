import { PatientsService } from './services/patients.service';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginRoutingModule } from './shared/login/login-routing.module';
import { TherapistsService } from './services/therapists.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { ClinicsService } from './services/clinics.service';
import { AuthGuardsService } from './shared/auth/auth-guards.service';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { ClinicComponent } from './clinics/clinic.component';
import { TherapistsComponent } from './therapists/therapists.component';
import { LoginComponent } from './shared/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

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
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'patients', component: PatientsComponent},
      {path: 'therapists', component: TherapistsComponent},
      {path: 'clinics', component: ClinicComponent},
      {
        path: 'admin',
        component: AdminComponent,
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [AuthGuardsService]
      },
      {path: '**', component: NotFoundComponent}
    ]),
    AdminModule, LoginRoutingModule
  ],
providers : [
  AuthGuardsService, ClinicsService , TherapistsService , PatientsService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
