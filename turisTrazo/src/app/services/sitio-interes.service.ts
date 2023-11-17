import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SitioInteresService {

  URL_API: string = "/api/interest-site";
  URL_API_IMAGHN = "/api/images";

  private sitiosSubject = new Subject<any[]>();
  sitios$ = this.sitiosSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) { }

  // Obtener todas los sitios de inter de la base de datos
  getAllSitios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL_API}`).pipe(
      tap((sitios) => {
        this.sitiosSubject.next(sitios);
      })
    );
  }

  findSitio(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL_API}/${id}`).pipe(
      tap(() => {
      })
    );
  }

  getImages(nombreImagen: string) {
    const url = `${nombreImagen}`;
    return this.http.get(url, { responseType: 'blob' });
  }

  // Guardar un sitio de interés y emite actualizaciones
  saveSitio(sitio: any): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${this.URL_API}/save`, sitio)
      .pipe(
        tap(() => {
          this.sendUpdate();
        })
      );
  }

  // Método privado para emitir actualización al observable resenas$
  private sendUpdate() {
    this.getAllSitios().subscribe((revisadas) => {
      this.sitiosSubject.next(revisadas);
    });
  }
}
