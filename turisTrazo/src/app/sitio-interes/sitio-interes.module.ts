import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitioInteresRoutingModule } from './sitio-interes-routing.module';
import { SitioInteresPageComponent } from './pages/sitio-interes-page/sitio-interes-page.component';
import { InicioComponent } from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    SitioInteresPageComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    SitioInteresRoutingModule,
  ]
})
export class SitioInteresModule { }
