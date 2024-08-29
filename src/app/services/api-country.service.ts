import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '../../environments/environment.development'
import { Region } from '../interfaces/countries.interface'

@Injectable({
  providedIn: 'root',
})
export class ApiCountryService {
  private apiUrl: string = environment.apiUrl

  constructor(private http: HttpClient) {}

  getCountriesByRegion(region: string): Observable<Region> {
    return this.http.get<Region>(`${this.apiUrl}/region/${region}`)
  }

  getCountryByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/name/${name}`)
  }

  getCountryByCapital(capital: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/capital/${capital}`)
  }
}
