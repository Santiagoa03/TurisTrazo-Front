import { Component, Input } from '@angular/core';

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
  id!: string | number;

}
