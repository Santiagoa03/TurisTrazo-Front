import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Barrio, Tour } from '../interface/models-type';

@Injectable({
  providedIn: 'root'
})
export class NeighborhoodService {

  URL_API: string = "/api/neighborhood"

  constructor(private http: HttpClient) { }

  getAllNeighborhood(): Observable<Barrio[]> {
    return this.http.get<Barrio[]>(`${this.URL_API}`);
  }

}
