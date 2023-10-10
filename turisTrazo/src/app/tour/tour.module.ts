import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { ReservarTourComponent } from './pages/reservar-tour/reservar-tour.component';
import { InicioComponent } from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    ReservarTourComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule
  ]
})
export class TourModule { }
