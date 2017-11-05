import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ClinicsService} from '../../services/clinics.service';
import {Clinics} from '../../model/clinics';

@Component({
  selector: 'app-admin-clinic',
  templateUrl: './admin-clinic.component.html',
  styleUrls: ['./admin-clinic.component.css']
})
export class AdminClinicComponent implements OnInit {
  // Component properties
  allClinics: Clinics[];
  statusCode: number;
  requestProcessing = false;
  clinicIdToUpdate = null;
  processValidation = false;
  // Create form
  clinicForm = new FormGroup({
    name: new FormControl('', Validators.required),
    imgUrl: new FormControl('', Validators.required)
  });
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
  // Handle create and update clinics
  onClinicsFormSubmit() {
    this.processValidation = true;
    if (this.clinicForm.invalid) {
      return; // Validation failed, exit from method.
    }
    // Form is valid, now perform create or update
    this.preProcessConfigurations();
    const clinic = this.clinicForm.value;
    if (this.clinicIdToUpdate === null) {
      // Generate clinic id then create clinic
      this
        .clinicsService
        .getAllClinics()
        .subscribe(clinics => {

          // Generate clinic id
          const maxIndex = clinics.length - 1;
          const clinicWithMaxIndex = clinics[maxIndex];
          const clinicId = clinicWithMaxIndex.id + 1;
          clinic.id = clinicId;

          // Create clinic
          this
            .clinicsService
            .createClinic(clinic)
            .subscribe(successCode => {
              this.statusCode = successCode;
              this.getAllClinics();
              this.backToCreateClinic();
            }, errorCode => this.statusCode = errorCode);
        });
    } else {
      // Handle update clinic
      clinic.id = this.clinicIdToUpdate;
      this
        .clinicsService
        .updateClinic(clinic)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllClinics();
          this.backToCreateClinic();
        }, errorCode => this.statusCode = errorCode);
    }
  }
  // Load clinic by id to edit
  loadClinicToEdit(clinicId: number) {
    this.preProcessConfigurations();
    this
      .clinicsService
      .getClinicById(clinicId)
      .subscribe(clinic => {
        this.clinicIdToUpdate = clinic.id;
        this
          .clinicForm
          .setValue({name: clinic.name, imgUrl: clinic.imgUrl});
        this.processValidation = true;
        this.requestProcessing = false;
      }, errorCode => this.statusCode = errorCode);
  }
  // Delete clinic
  deleteClinic(clinicId: number) {
    this.preProcessConfigurations();
    this
      .clinicsService
      .deleteClinicById(clinicId)
      .subscribe(successCode => {
        // this.statusCode = successCode; Expecting success code 204 from server
        this.statusCode = 204;
        this.getAllClinics();
        this.backToCreateClinic();
      }, errorCode => this.statusCode = errorCode);
  }
  // Perform preliminary processing configurations
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }
  // Go back from update to create
  backToCreateClinic() {
    this.clinicIdToUpdate = null;
    this
      .clinicForm
      .reset();
    this.processValidation = false;
  }
}
