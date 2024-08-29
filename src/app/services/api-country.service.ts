import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1'; 

  constructor(private http: HttpClient) {}

  //región
  getCountriesByRegion(region: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/region/${region}`);
  }

  //nombre
  getCountryByName(name: string, fullText: boolean = false): Observable<any> {
    const params = new HttpParams().set('fullText', fullText.toString());
    return this.http.get<any>(`${this.apiUrl}/name/${name}`, { params });
  }

  //capital
  getCountryByCapital(capital: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/capital/${capital}`);
  }
 
}
