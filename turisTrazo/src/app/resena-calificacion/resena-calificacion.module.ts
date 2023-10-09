import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResenaCalificacionRoutingModule } from './resena-calificacion-routing.module';
import { ResenaPageComponent } from './pages/resena-page/resena-page.component';


@NgModule({
  declarations: [
    ResenaPageComponent
  ],
  imports: [
    CommonModule,
    ResenaCalificacionRoutingModule
  ]
})
export class ResenaCalificacionModule { }
