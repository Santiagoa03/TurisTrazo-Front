import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagen, ImagenData, ImagenSave, Tour } from '../interface/models-type';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  URL_API: string = "/api/imagen"
  URL_API_IMAGES: string = "/api/images/upload"
  URL_API_SAVE: string = "/api/images/save"

  constructor(private http: HttpClient) { }

  getAllImagen(imagenInfo: ImagenData): Observable<Imagen[]> {
    return this.http.post<Imagen[]>(`${this.URL_API}`, imagenInfo);
  }

  uploadImages(images: File[]): Observable<any> {
    const formData = new FormData();

    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    return this.http.post<any>(this.URL_API_IMAGES, formData);
  }

  saveImages(imagenInfo: ImagenSave): Observable<any> {
    return this.http.post<any>(`${this.URL_API_SAVE}`, imagenInfo);
  }
}
