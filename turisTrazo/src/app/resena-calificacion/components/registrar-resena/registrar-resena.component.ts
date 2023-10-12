import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/interface/models-type';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'resena-registrar',
  templateUrl: './registrar-resena.component.html',
  styleUrls: ['./registrar-resena.component.css']
})
export class RegistrarResenaComponent implements OnInit {

  mostrarFormularioResena: boolean = false;
  listTour: Tour[] = [];
  constructor(private tourService: TourService) { }

  ngOnInit(): void {
    this.tourService.getAllTour().subscribe(tour => this.listTour = tour);
  }

  toggleFormulario(): void {
    this.mostrarFormularioResena = !this.mostrarFormularioResena;
  }

}
