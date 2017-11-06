import { ClinicsService } from './../services/clinics.service';
import {Clinics} from '../model/clinics';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {
allClinics: Clinics[];
statusCode: number;

// Create constructor to get service instance
constructor(private clinicsService: ClinicsService) {}
// Create ngOnInit() and and load clinics
ngOnInit(): void {
  this.getAllClinics();
}
// Fetch all clinics
getAllClinics() {
  this
    .clinicsService
    .getAllClinics()
    .subscribe(data => this.allClinics = data, errorCode => this.statusCode = errorCode);
}
}
