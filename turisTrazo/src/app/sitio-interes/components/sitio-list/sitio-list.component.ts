import { Component, OnInit } from '@angular/core';
import { SitioInteresService } from '../../services/sitio-interes.service';

@Component({
  selector: 'sitio-list',
  templateUrl: './sitio-list.component.html',
  styles: [
  ]
})
export class SitioListComponent {

  listaItems = [
    { id: 1, titulo: 'Comuna 13', imagen: '/./assets/sitio.jpg' },
    { id: 2, titulo: 'Barrio 1', imagen: '/./assets/medellin.jpg' },
    { id: 3, titulo: 'Título 3', imagen: '/./assets/sitio.jpg' },
    { id: 4, titulo: 'Título 4', imagen: '/./assets/sitio.jpg' },
    { id: 4, titulo: 'Título 4', imagen: '/./assets/sitio.jpg' },
    { id: 4, titulo: 'Título 4', imagen: '/./assets/sitio.jpg' },
    { id: 4, titulo: 'Título 4', imagen: '/./assets/sitio.jpg' },
    { id: 4, titulo: 'Título 4', imagen: '/./assets/sitio.jpg' },
    { id: 4, titulo: 'Título 4', imagen: '/./assets/sitio.jpg' },
    { id: 4, titulo: 'Título 4', imagen: '/./assets/sitio.jpg' },
    { id: 4, titulo: 'Título 4', imagen: '/./assets/sitio.jpg' },

  ];

}
