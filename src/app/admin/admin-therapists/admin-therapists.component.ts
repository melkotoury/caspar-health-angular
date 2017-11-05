import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {TherapistsService} from '../../services/therapists.service';
import {Therapists} from '../../model/therapists';

@Component({
  selector: 'app-admin-therapists',
 templateUrl: './admin-therapists.component.html',
 styleUrls: ['./admin-therapists.component.css']
})
export class AdminTherapistsComponent implements OnInit {
  // Component properties
  allTherapists: Therapists[];
  statusCode: number;
  requestProcessing = false;
  therapistIdToUpdate = null;
  processValidation = false;
  // Create form
  therapistForm = new FormGroup({
    name: new FormControl('', Validators.required),
    imgUrl: new FormControl('', Validators.required)
  });
  // Create constructor to get service instance
  constructor(private therapistsService: TherapistsService) {}
  // Create ngOnInit() and and load therapists
  ngOnInit(): void {
    this.getAllTherapists();
  }
  // Fetch all therapists
  getAllTherapists() {
    this
      .therapistsService
      .getAllTherapists()
      .subscribe(data => this.allTherapists = data, errorCode => this.statusCode = errorCode);
  }
  // Handle create and update therapist
  onTherapistsFormSubmit() {
    this.processValidation = true;
    if (this.therapistForm.invalid) {
      return; // Validation failed, exit from method.
    }
    // Form is valid, now perform create or update
    this.preProcessConfigurations();
    const therapist = this.therapistForm.value;
    if (this.therapistIdToUpdate === null) {
      // Generate clinic id then create therapist
      this
        .therapistsService
        .getAllTherapists()
        .subscribe(therapists => {

          // Generate clinic id
          const maxIndex = therapists.length - 1;
          const therapistWithMaxIndex = therapists[maxIndex];
          const therapistId = therapistWithMaxIndex.id + 1;
          therapist.id = therapistId;

          // Create therapist
          this
            .therapistsService
            .createTherapist(therapist)
            .subscribe(successCode => {
              this.statusCode = successCode;
              this.getAllTherapists();
              this.backToCreateTherapist();
            }, errorCode => this.statusCode = errorCode);
        });
    } else {
      // Handle update therapist
      therapist.id = this.therapistIdToUpdate;
      this
        .therapistsService
        .updateTherapist(therapist)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllTherapists();
          this.backToCreateTherapist();
        }, errorCode => this.statusCode = errorCode);
    }
  }
  // Load therapist by id to edit
  loadTherapistToEdit(therapistId: number) {
    this.preProcessConfigurations();
    this
      .therapistsService
      .getTherapistById(therapistId)
      .subscribe(therapist => {
        this.therapistIdToUpdate = therapist.id;
        this
          .therapistForm
          .setValue({name: therapist.name, imgUrl: therapist.imgUrl});
        this.processValidation = true;
        this.requestProcessing = false;
      }, errorCode => this.statusCode = errorCode);
  }
  // Delete therapist
  deleteTherapist(therapistId: number) {
    this.preProcessConfigurations();
    this
      .therapistsService
      .deleteTherapistById(therapistId)
      .subscribe(successCode => {
        // this.statusCode = successCode; Expecting success code 204 from server
        this.statusCode = 204;
        this.getAllTherapists();
        this.backToCreateTherapist();
      }, errorCode => this.statusCode = errorCode);
  }
  // Perform preliminary processing configurations
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }
  // Go back from update to create
  backToCreateTherapist() {
    this.therapistIdToUpdate = null;
    this
      .therapistForm
      .reset();
    this.processValidation = false;
  }
}
