import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitioInteresRoutingModule } from './sitio-interes-routing.module';
import { SitioInteresPageComponent } from './pages/sitio-interes-page/sitio-interes-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SitioInteresPageComponent
  ],
  imports: [
    CommonModule,
    SitioInteresRoutingModule,
    SharedModule

  ]
})
export class SitioInteresModule { }
