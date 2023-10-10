import { Component } from '@angular/core';

@Component({
  selector: 'resena-registrar',
  templateUrl: './registrar-resena.component.html',
  styleUrls: ['./registrar-resena.component.css']
})
export class RegistrarResenaComponent {

  mostrarFormularioResena: boolean = false;

  toggleFormulario(): void {
    this.mostrarFormularioResena = !this.mostrarFormularioResena;
  }

}
