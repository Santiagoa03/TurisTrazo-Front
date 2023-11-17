import { Component, OnInit } from '@angular/core';
import { SitioInteresService } from 'src/app/services/sitio-interes.service';
@Component({
  selector: 'sitio-list',
  templateUrl: './sitio-list.component.html',
  styles: [
  ]
})
export class SitioListComponent implements OnInit {

  sitios: any[] = [];

  constructor(private sitioInteresService: SitioInteresService) { }

  ngOnInit(): void {
    this.sitioInteresService.getAllSitios().subscribe((sitios) => {
      this.sitios = sitios;
      this.getImages();
    })

  }

  getImages() {
    this.sitios.forEach(sitio => {
      this.sitioInteresService.getImages(sitio.imagen).subscribe(
        (data: Blob) => {
          const reader = new FileReader();
          reader.onload = () => {
            sitio.imagenData = reader.result as string;
          };
          reader.readAsDataURL(data);
        },
        error => {
          console.error(`Error al obtener imagen para ${sitio.imagen}:`, error);
        }
      );
    });
  }


}
