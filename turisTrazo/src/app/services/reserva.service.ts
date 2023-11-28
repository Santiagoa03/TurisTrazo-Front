import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Resena, ReservarTour } from 'src/app/interface/models-type';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  URL_API: string = "/api/reserva";

  private reservaSubject = new Subject<ReservarTour[]>();
  reserva$ = this.reservaSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllReservaByGuiaId(id: number): Observable<ReservarTour[]> {
    return this.http.get<ReservarTour[]>(`${this.URL_API}/${id}`).pipe(
      tap((reservas) => {
        this.reservaSubject.next(reservas);
      })
    );
  }

  saveReserva(reserva: ReservarTour): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${this.URL_API}/save`, reserva)
      .pipe(
        tap(() => {
          this.sendUpdate(reserva.tour.guia?.id || 0);
        })
      );
  }

  private sendUpdate(id: number) {
    this.getAllReservaByGuiaId(id).subscribe((revisadas) => {
      this.reservaSubject.next(revisadas);
    });
  }

  deleteReserva(idMensaje: number, idGuia: number): Observable<any> {
    return this.http.delete<HttpResponse<any>>(`${this.URL_API}/${idMensaje}`).pipe(
      tap(() => {
        this.sendUpdate(idGuia);
      })
    )
  }
}
