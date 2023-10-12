import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resena } from 'src/app/interface/models-type';

@Injectable({
  providedIn: 'root'
})
export class ResenaService {

  URL_API: string = "/api/resenas"
  
  constructor(private http: HttpClient) { }

  getAllResena(): Observable<Resena[]> {
    return this.http.get<Resena[]>(`${this.URL_API}`);
  }

}
