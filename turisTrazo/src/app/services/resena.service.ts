import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Resena } from 'src/app/interface/models-type';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ResenaService {

  URL_API: string = "/api/resenas";

  private resenasSubject = new Subject<Resena[]>();
  resenas$ = this.resenasSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) { }

  // Obtener todas las reseñas de la base de datos
  getAllResena(): Observable<Resena[]> {
    return this.http.get<Resena[]>(`${this.URL_API}`).pipe(
      tap((resenas) => {
        this.resenasSubject.next(resenas);
      })
    );
  }

  // Guardar una reseña y emitir actualizaciones
  saveResena(resena: Resena): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${this.URL_API}/save`, resena)
      .pipe(
        tap(() => {
          this.sendUpdate();
        })
      );
  }

  // Método privado para emitir actualización al observable resenas$
  private sendUpdate() {
    this.getAllResena().subscribe((revisadas) => {
      this.resenasSubject.next(revisadas);
    });
  }
}
