import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tour } from '../interface/models-type';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  URL_API: string = "/api/tour"

  constructor(private http: HttpClient) { }

  getAllTour(): Observable<Tour[]> {
    return this.http.get<Tour[]>(`${this.URL_API}`);
  }

}
