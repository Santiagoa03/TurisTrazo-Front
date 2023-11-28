import { Tour } from 'src/app/interface/models-type';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TourService {

  URL_API: string = "/api/tour"

  private tourSubject = new Subject<Tour[]>();
  tour$ = this.tourSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAllTour(): Observable<Tour[]> {
    return this.http.get<Tour[]>(`${this.URL_API}`);
  }

  findTourById(id: number): Observable<Tour> {
    return this.http.get<Tour>(`${this.URL_API}/${id}`);
  }
  getAllNotValidated(): Observable<Tour[]> {
    return this.http.get<Tour[]>(`${this.URL_API}/notvalidated`).pipe(
      tap((tour) => {
        this.tourSubject.next(tour);
      })
    );
  }


  private sendUpdate(): void {
    this.getAllNotValidated().subscribe((revisadas) => {
      this.tourSubject.next(revisadas);
    })
  }

  deleteTour(tourId: number): Observable<any> {
    return this.http.delete<any>(`${this.URL_API}/${tourId}`).pipe(
      tap(() => {
        this.sendUpdate();
      })
    );
  }


  saveTour(tour: Tour): Observable<Tour> {
    tour.imagen = this.deleteApiImage(tour.imagen);
    return this.http.post<Tour>(`${this.URL_API}`, tour).pipe(
      tap(() => {
        this.sendUpdate();
      })
    );
  }


  deleteApiImage(url: string): string {
    const index = url.lastIndexOf('/');
    if (index !== -1) {
      return url.substring(index + 1); // Sumar 1 para incluir la barra
    }
    return url;
  }


}
