import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Resena } from 'src/app/interface/models-type';
import { ResenaService } from 'src/app/services/resena.service';

@Component({
  selector: 'resena-list',
  templateUrl: './resena-list.component.html',
  styles: [
  ]
})
export class ResenaListComponent implements OnInit {

  listResena: Resena[] = [];
  private subscription!: Subscription;;

  slideIndex = 0;
  slideWidth = 300; // Ancho de cada slide (ajustar según diseño)

  constructor(private resenaService: ResenaService) { }


  ngOnInit() {
    this.resenaService.resenas$.subscribe((resenas) => {
      this.listResena = resenas;
    });

    this.getAllResenas();
    this.startSlider();
  }

  get extendedListResena() {
    // Duplicar la lista para que se repitan las tarjetas al final
    return [...this.listResena, ...this.listResena];
  }

  startSlider() {
    setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.listResena.length;
    }, 2000); // Cambia el número para ajustar la velocidad del desplazamiento
  }
  
  getAllResenas() {
    this.resenaService.getAllResena().subscribe((resenas) => {
      this.listResena = resenas;
    });
  }
}


