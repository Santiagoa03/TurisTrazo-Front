import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { ReservarTourComponent } from './pages/reservar-tour/reservar-tour.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarTourComponent } from './components/registrar-tour/registrar-tour.component';
import { TourComponent } from './components/tour/tour.component';
import { TourCardComponent } from './components/tour-card/tour-card.component';


@NgModule({
  declarations: [
    ReservarTourComponent,
    InicioComponent,
    RegistrarTourComponent,
    TourComponent,
    TourCardComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule
  ]
})
export class TourModule { }
