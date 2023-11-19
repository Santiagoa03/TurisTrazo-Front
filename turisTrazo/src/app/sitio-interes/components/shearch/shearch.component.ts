import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sitio-interes-shearch',
  templateUrl: './shearch.component.html',
  styles: [
  ]
})
export class ShearchComponent {

  @Output() terminoBusquedaEmitter = new EventEmitter<string>();


  input: string = '';

  search() {
    this.terminoBusquedaEmitter.emit(this.input);
  }
}
