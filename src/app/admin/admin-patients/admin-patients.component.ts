import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {PatientsService} from '../../services/patients.service';
import {Patients} from '../../model/patients';

@Component({
  selector: 'app-admin-patients',
  templateUrl: './admin-patients.component.html',
  styleUrls: ['./admin-patients.component.css']
})
export class AdminPatientsComponent implements OnInit {
// Component properties
allPatients: Patients[];
statusCode: number;
requestProcessing = false;
patientIdToUpdate = null;
processValidation = false;
// Create form
patientForm = new FormGroup({
  name: new FormControl('', Validators.required),
  imgUrl: new FormControl('', Validators.required)
});
// Create constructor to get service instance
constructor(private patientsService: PatientsService) {}
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
// Handle create and update Patient
onPatientsFormSubmit() {
  this.processValidation = true;
  if (this.patientForm.invalid) {
    return; // Validation failed, exit from method.
  }
  // Form is valid, now perform create or update
  this.preProcessConfigurations();
  const patient = this.patientForm.value;
  if (this.patientIdToUpdate === null) {
    // Generate patient id then create Patient
    this
      .patientsService
      .getAllPatients()
      .subscribe(patients => {

        // Generate patient id
        const maxIndex = patients.length - 1;
        const patientWithMaxIndex = patients[maxIndex];
        const patientId = patientWithMaxIndex.id + 1;
        patient.id = patientId;

        // Create Patient
        this
          .patientsService
          .createPatient(patient)
          .subscribe(successCode => {
            this.statusCode = successCode;
            this.getAllPatients();
            this.backToCreatePatient();
          }, errorCode => this.statusCode = errorCode);
      });
  } else {
    // Handle update Patient
    patient.id = this.patientIdToUpdate;
    this
      .patientsService
      .updatePatient(patient)
      .subscribe(successCode => {
        this.statusCode = successCode;
        this.getAllPatients();
        this.backToCreatePatient();
      }, errorCode => this.statusCode = errorCode);
  }
}
// Load Patient by id to edit
loadPatientToEdit(patientId: number) {
  this.preProcessConfigurations();
  this
    .patientsService
    .getPatientById(patientId)
    .subscribe(patient => {
      this.patientIdToUpdate = patient.id;
      this
        .patientForm
        .setValue({name: patient.name, imgUrl: patient.imgUrl});
      this.processValidation = true;
      this.requestProcessing = false;
    }, errorCode => this.statusCode = errorCode);
}
// Delete Patient
deletePatient(patientId: number) {
  this.preProcessConfigurations();
  this
    .patientsService
    .deletePatientById(patientId)
    .subscribe(successCode => {
      // this.statusCode = successCode; Expecting success code 204 from server
      this.statusCode = 204;
      this.getAllPatients();
      this.backToCreatePatient();
    }, errorCode => this.statusCode = errorCode);
}
// Perform preliminary processing configurations
preProcessConfigurations() {
  this.statusCode = null;
  this.requestProcessing = true;
}
// Go back from update to create
backToCreatePatient() {
  this.patientIdToUpdate = null;
  this
    .patientForm
    .reset();
  this.processValidation = false;
}
}
