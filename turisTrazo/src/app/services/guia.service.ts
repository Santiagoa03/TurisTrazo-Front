import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Guia, SitioInteres } from '../interface/models-type';

@Injectable({
  providedIn: 'root'
})
export class GuiaService {

  URL_API: string = "/api/guide";

  constructor(private http: HttpClient, private authService: AuthService) { }


  findGuide(id: number): Observable<Guia> {
    return this.http.get<Guia>(`${this.URL_API}/${id}`).pipe(
      tap(() => {
      })
    );
  }

}
