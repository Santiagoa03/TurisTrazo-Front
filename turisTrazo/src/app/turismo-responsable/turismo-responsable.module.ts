import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurismoResponsableRoutingModule } from './turismo-responsable-routing.module';
import { TurismoResponsablePageComponent } from './pages/turismo-responsable-page/turismo-responsable-page.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InformationComponent } from './components/information/information.component';


@NgModule({
  declarations: [
    TurismoResponsablePageComponent,
    InicioComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    TurismoResponsableRoutingModule
  ]
})
export class TurismoResponsableModule { }
