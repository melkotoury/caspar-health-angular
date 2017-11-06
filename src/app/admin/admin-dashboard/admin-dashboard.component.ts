import { Component, OnInit } from '@angular/core';
import {TherapistsService} from '../../services/therapists.service';
import {Therapists} from '../../model/therapists';
import {ClinicsService} from '../../services/clinics.service';
import {Clinics} from '../../model/clinics';
import {PatientsService} from '../../services/patients.service';
import {Patients} from '../../model/patients';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
allClinics: Clinics[];
allTherapists: Therapists[];
allPatients: Patients[];
statusCode: number;


// Create constructor to get service instance
constructor(
  private therapistsService: TherapistsService,
  private clinicsService: ClinicsService,
  private patientsService: PatientsService
) {}
// Create ngOnInit() and and load Therapists
ngOnInit(): void {
  this.getAllClinics();
  this.getAllTherapists();
  this.getAllPatients();
}
// Fetch all Clinics
getAllClinics() {
  this
    .clinicsService
    .getAllClinics()
    .subscribe(data => this.allClinics = data, errorCode => this.statusCode = errorCode);
}
// Fetch all Therapists
getAllTherapists() {
  this
    .therapistsService
    .getAllTherapists()
    .subscribe(data => this.allTherapists = data, errorCode => this.statusCode = errorCode);
}
// Fetch all Therapists
getAllPatients() {
  this
    .patientsService
    .getAllPatients()
    .subscribe(data => this.allPatients = data, errorCode => this.statusCode = errorCode);
}
// Get Count of Clinics
getCountClinics() {
  return this.allClinics.length;
}

// Get Count of Therapists
getCountTherapists() {
  return this.allTherapists.length;
}

// Get Count of Patients
getCountPatients() {
  return this.allPatients.length;
}


}
