import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { ReservaGuiaComponent } from './pages/reserva-guia/reserva-guia.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MensajesRoutingModule } from './mensajes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    MensajesRoutingModule
  ],
  declarations: [MensajeComponent, ReservaGuiaComponent]
})
export class MensajesModule { }
