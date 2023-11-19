import { Component, Input, OnInit } from '@angular/core';
import { SitioInteres } from 'src/app/interface/models-type';
import { SitioInteresService } from 'src/app/services/sitio-interes.service';
@Component({
  selector: 'sitio-list',
  templateUrl: './sitio-list.component.html',
  styles: [
  ]
})
export class SitioListComponent implements OnInit {

  @Input()
  filtro: string = '';

  sitios: SitioInteres[] = [];
  sitiosFiltrados: SitioInteres[] = [];

  terminoBusqueda: String = '';

  constructor(private sitioInteresService: SitioInteresService) { }

  ngOnInit(): void {
    this.sitioInteresService.getAllSitios().subscribe((sitios) => {
      this.sitios = sitios;
      this.sitiosFiltrados = sitios;
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

  filtrarSitios(termino: string): void {
    if (termino.trim() === '') {
      this.sitiosFiltrados = this.sitios;
    } else {
      this.sitiosFiltrados = this.sitios.filter((sitio) =>
        sitio.nombreSitio.toLowerCase().includes(termino.toLowerCase())
      );
    }
  }


}
