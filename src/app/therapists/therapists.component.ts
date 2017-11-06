import { Component, OnInit } from '@angular/core';
import {TherapistsService} from '../services/therapists.service';
import {Therapists} from '../model/therapists';
@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.component.html',
  styleUrls: ['./therapists.component.css']
})
export class TherapistsComponent implements OnInit {
allTherapists: Therapists[];
statusCode: number;

// Create constructor to get service instance
constructor(private therapistsService: TherapistsService) {}
// Create ngOnInit() and and load Therapists
ngOnInit(): void {
  this.getAllTherapists();
}
// Fetch all Therapists
getAllTherapists() {
  this
    .therapistsService
    .getAllTherapists()
    .subscribe(data => this.allTherapists = data, errorCode => this.statusCode = errorCode);
}

}
