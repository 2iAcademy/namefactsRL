import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameFactService {
  private apiUrl = 'https://api.agify.io/?name='

  constructor(private http: HttpClient) { }

  getAgeFromName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${encodeURIComponent(name)}`);
  }

}
