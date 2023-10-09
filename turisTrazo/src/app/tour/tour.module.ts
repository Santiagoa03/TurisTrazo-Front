import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { ReservarTourComponent } from './pages/reservar-tour/reservar-tour.component';


@NgModule({
  declarations: [
    ReservarTourComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule
  ]
})
export class TourModule { }
