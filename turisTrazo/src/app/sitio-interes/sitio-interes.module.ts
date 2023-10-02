import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitioInteresRoutingModule } from './sitio-interes-routing.module';
import { SitioInteresPageComponent } from './pages/sitio-interes-page/sitio-interes-page.component';


@NgModule({
  declarations: [
    SitioInteresPageComponent
  ],
  imports: [
    CommonModule,
    SitioInteresRoutingModule
  ]
})
export class SitioInteresModule { }
