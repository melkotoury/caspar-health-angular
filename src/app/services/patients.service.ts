import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';

import {Patients} from '../model/patients';

@Injectable()
export class PatientsService {
  // URL for CRUD operations
  patientsUrl = 'http://localhost:3000/patients';
  // Create constructor to get Http instance
  constructor(private http: Http) {}
  // Fetch all tpatient
  getAllPatients(): Observable < Patients[] > {
    return this
      .http
      .get(this.patientsUrl)
      .map(this.extractData)
      .catch(this.handleError);

  }
  // Create patient
  createPatient(patient: Patients): Observable < number > {
    const cpHeaders = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: cpHeaders});
    return this
      .http
      .post(this.patientsUrl, patient, options)
      .map(success => success.status)
      .catch(this.handleError);
  }
  // Fetch patient by id
  getPatientById(patientId: number): Observable < Patients > {
    const cpHeaders = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: cpHeaders});
    console.log(this.patientsUrl + '/' + patientId);
    return this
      .http
      .get(this.patientsUrl + '/' + patientId)
      .map(this.extractData)
      .catch(this.handleError);
  }
  // Update patient
  updatePatient(patient: Patients): Observable < number > {
    const cpHeaders = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: cpHeaders});
    return this
      .http
      .put(this.patientsUrl + '/' + patient.id, patient, options)
      .map(success => success.status)
      .catch(this.handleError);
  }
  // Delete patient
  deletePatientById(patientId: number): Observable < number > {
    const cpHeaders = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: cpHeaders});
    return this
      .http
      .delete(this.patientsUrl + '/' + patientId)
      .map(success => success.status)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    const body = res.json();
    return body;
  }
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
