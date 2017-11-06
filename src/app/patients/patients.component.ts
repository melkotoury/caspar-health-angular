import { Component, OnInit } from '@angular/core';
import {PatientsService} from '../services/patients.service';
import {Patients} from '../model/patients';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
allPatients: Patients[];
statusCode: number;

// Create constructor to get service instance
constructor(private patientsService : PatientsService) {}
// Create ngOnInit() and and load Patients
ngOnInit(): void {
  this.getAllPatients();
}
// Fetch all Patients
getAllPatients() {
  this
    .patientsService
    .getAllPatients()
    .subscribe(data => this.allPatients = data, errorCode => this.statusCode = errorCode);
}

}
