import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { ReservarTourComponent } from './pages/reservar-tour/reservar-tour.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarTourComponent } from './components/registrar-tour/registrar-tour.component';
import { TourComponent } from './components/tour/tour.component';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { SharedModule } from '../shared/shared.module';
import { DetalleTourComponent } from './components/detalle-tour/detalle-tour.component';
import { ResenaCalificacionModule } from '../resena-calificacion/resena-calificacion.module';
import { FormsModule } from '@angular/forms'; //
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReservarTourComponent,
    InicioComponent,
    RegistrarTourComponent,
    TourComponent,
    TourCardComponent,
    DetalleTourComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule,
    SharedModule,
    ResenaCalificacionModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TourModule { }
