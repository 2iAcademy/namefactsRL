import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameFactService {
  //private apiUrl = 'https://api.agify.io/?name='
  private apiUrl = 'https://api.agify.io/'

  constructor(private http: HttpClient) { }

  //getAgeFromName(name: string): Observable<any> {
   // return this.http.get(`${this.apiUrl}${encodeURIComponent(name)}`);
 // }
  getAgeFromName(name: string): Observable<any> {
  const params = new HttpParams().set('name', name);
  return this.http.get('https://api.agify.io/', { params });
}
}
