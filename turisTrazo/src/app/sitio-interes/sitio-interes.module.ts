import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitioInteresRoutingModule } from './sitio-interes-routing.module';
import { SitioInteresPageComponent } from './pages/sitio-interes-page/sitio-interes-page.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SitioComponent } from './components/sitio/sitio.component';
import { ShearchComponent } from './components/shearch/shearch.component';
import { SitioListComponent } from './components/sitio-list/sitio-list.component';
import { DetalleSitioComponent } from './components/detalle-sitio/detalle-sitio.component';


@NgModule({
  declarations: [
    SitioInteresPageComponent,
    InicioComponent,
    SitioComponent,
    ShearchComponent,
    SitioListComponent,
    DetalleSitioComponent
  ],
  imports: [
    CommonModule,
    SitioInteresRoutingModule,
  ]
})
export class SitioInteresModule { }
