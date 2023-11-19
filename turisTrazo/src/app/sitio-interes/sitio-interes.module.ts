import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitioInteresRoutingModule } from './sitio-interes-routing.module';
import { SitioInteresPageComponent } from './pages/sitio-interes-page/sitio-interes-page.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SitioComponent } from './components/sitio/sitio.component';
import { ShearchComponent } from './components/shearch/shearch.component';
import { SitioListComponent } from './components/sitio-list/sitio-list.component';
import { DetalleSitioComponent } from './components/detalle-sitio/detalle-sitio.component';
import { DetalleSitioInteresComponent } from './pages/detalle-sitio-interes/detalle-sitio-interes.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SitioInteresPageComponent,
    InicioComponent,
    SitioComponent,
    ShearchComponent,
    SitioListComponent,
    DetalleSitioComponent,
    DetalleSitioInteresComponent
  ],
  imports: [
    CommonModule,
    SitioInteresRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class SitioInteresModule { }
