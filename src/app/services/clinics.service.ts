
import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



import {Clinics} from '../model/clinics';

@Injectable()
export class ClinicsService {
  // URL for CRUD operations
  clinicsUrl = 'http://localhost:3000/clinics';
  // Create constructor to get Http instance
  constructor(private http: Http) {}
  // Fetch all clinics
  getAllClinics(): Observable <Clinics[]> {
    return this
      .http
      .get(this.clinicsUrl)
      .map(this.extractData)
      .catch(this.handleError);

  }
  // Create clinic
  createClinic(clinic: Clinics): Observable <number> {
    const cpHeaders = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: cpHeaders});
    return this
      .http
      .post(this.clinicsUrl, clinic, options)
      .map(success => success.status)
      .catch(this.handleError);
  }
  // Fetch clinic by id
  getClinicById(clinicId: number): Observable <Clinics> {
    const cpHeaders = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: cpHeaders});
    console.log(this.clinicsUrl + '/' + clinicId);
    return this
      .http
      .get(this.clinicsUrl + '/' + clinicId)
      .map(this.extractData)
      .catch(this.handleError);
  }
  // Update clinic
  updateClinic(clinic: Clinics): Observable <number> {
    const cpHeaders = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: cpHeaders});
    return this
      .http
      .put(this.clinicsUrl + '/' + clinic.id, clinic, options)
      .map(success => success.status)
      .catch(this.handleError);
  }
  // Delete clinic
  deleteClinicById(clinicId: number): Observable <number> {
    const cpHeaders = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: cpHeaders});
    return this
      .http
      .delete(this.clinicsUrl + '/' + clinicId)
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
