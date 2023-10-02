import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurismoResponsableRoutingModule } from './turismo-responsable-routing.module';
import { TurismoResponsablePageComponent } from './pages/turismo-responsable-page/turismo-responsable-page.component';


@NgModule({
  declarations: [
    TurismoResponsablePageComponent
  ],
  imports: [
    CommonModule,
    TurismoResponsableRoutingModule
  ]
})
export class TurismoResponsableModule { }
