import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import { Person } from '../models/person.model';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';

const API_URL = `${environment.BASE_URL}/api/person`;

@Injectable({
  providedIn: 'root'
})
export class PersonService extends RequestBaseService {

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  savePerson(person: Person): Observable<any> {
    return this.http.post(API_URL, person, {headers: this.getHeaders});
  }

  deletePerson(person: Person): Observable<any> {
    return this.http.delete( `${API_URL}/${person.id}`, {headers: this.getHeaders});
  }

  getAllPersons(): Observable<any> {
    return this.http.get(API_URL);
  }


}
