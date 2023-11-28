import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResenaCalificacionRoutingModule } from './resena-calificacion-routing.module';
import { ResenaPageComponent } from './pages/resena-page/resena-page.component';
import { ResenaComponent } from './resena/resena.component';
import { ResenasComponent } from './components/resenas/resenas.component';
import { RegistrarResenaComponent } from './components/registrar-resena/registrar-resena.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule } from '@angular/forms'; //
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ResenaListComponent } from './components/resena-list/resena-list.component';
@NgModule({
  declarations: [
    ResenaPageComponent,
    ResenaComponent,
    ResenasComponent,
    RegistrarResenaComponent,
    InicioComponent,
    ResenaListComponent
  ],
  imports: [
    CommonModule,
    ResenaCalificacionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports:[
    ResenasComponent
  ]
})
export class ResenaCalificacionModule { }
