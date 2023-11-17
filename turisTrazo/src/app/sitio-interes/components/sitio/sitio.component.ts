import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sitio-interes-card',
  templateUrl: './sitio.component.html',
  styles: [
  ]
})
export class SitioComponent {

  @Input()
  imagen!: string;

  @Input()
  titulo!: string;

  @Input()
  id!: number;

  constructor(private router: Router) { }

  details(id: number) {
    const idS: string = String(id);
    this.router.navigateByUrl("/sitio_interes/" + idS);
  }

}
