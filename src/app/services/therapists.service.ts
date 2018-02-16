import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Therapists} from '../model/therapists';

@Injectable()
export class TherapistsService {
  // URL for CRUD operations
  therapistsUrl = 'http://localhost:3000/therapists';
  // Create constructor to get Http instance
  constructor(private http: Http) {}
  // Fetch all therapists
  getAllTherapists(): Observable < Therapists[] > {
    return this
      .http
      .get(this.therapistsUrl)
      .map(this.extractData)
      .catch(this.handleError);

  }
  // Create therapist
  createTherapist(therapist: Therapists): Observable < number > {
    const cpHeaders = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: cpHeaders});
    return this
      .http
      .post(this.therapistsUrl, therapist, options)
      .map(success => success.status)
      .catch(this.handleError);
  }
  // Fetch therapist by id
  getTherapistById(therapistId: number) : Observable < Therapists > {
    const cpHeaders = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: cpHeaders});
    console.log(this.therapistsUrl + '/' + therapistId);
    return this
      .http
      .get(this.therapistsUrl + '/' + therapistId)
      .map(this.extractData)
      .catch(this.handleError);
  }
  // Update therapist
  updateTherapist(therapist: Therapists): Observable < number > {
    const cpHeaders = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: cpHeaders});
    return this
      .http
      .put(this.therapistsUrl + '/' + therapist.id, therapist, options)
      .map(success => success.status)
      .catch(this.handleError);
  }
  // Delete therapist
  deleteTherapistById(therapistId: number): Observable < number > {
    const cpHeaders = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: cpHeaders});
    return this
      .http
      .delete(this.therapistsUrl + '/' + therapistId)
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
