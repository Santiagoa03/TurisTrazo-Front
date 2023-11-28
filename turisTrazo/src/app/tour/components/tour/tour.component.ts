import { Component, Input, OnInit } from '@angular/core';
import { Tour } from 'src/app/interface/models-type';
import { SitioInteresService } from 'src/app/services/sitio-interes.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'tour-list',
  templateUrl: './tour.component.html',
  styles: [
  ]
})
export class TourComponent implements OnInit {

  @Input()
  filtro: string = '';

  tour: Tour[] = [];
  tourFiltrados: Tour[] = [];

  terminoBusqueda: String = '';

  constructor(private tourService: TourService, private sitioInteresService: SitioInteresService) { }

  ngOnInit(): void {
    this.tourService.getAllTour().subscribe((tours) => {
      this.tour = tours;
      this.tourFiltrados = tours;
      this.getImages();
    })

  }

  getImages() {
    this.tour.forEach(tour => {

      this.sitioInteresService.getImages(tour.imagen).subscribe(
        (data: Blob) => {
          const reader = new FileReader();
          reader.onload = () => {
            tour.imagenData = reader.result as string;
          };
          reader.readAsDataURL(data);
        },
        error => {
          console.error(`Error al obtener imagen para ${tour.imagen}:`, error);
        }
      );
    });
  }

  filtrarSitios(termino: string): void {
    if (termino.trim() === '') {
      this.tourFiltrados = this.tour;
    } else {
      this.tourFiltrados = this.tour.filter((tour) =>
        tour.nombre?.toLowerCase().includes(termino.toLowerCase())
      );
    }
  }
}
