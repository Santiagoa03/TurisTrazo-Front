import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GestionAdminRoutingModule } from './gestion-admin-routing.module';
import { GestionTourComponent } from './components/gestion-tour/gestion-tour.component';
import { GestionarTourPageComponent } from './pages/gestionar-tour-page/gestionar-tour-page.component';

@NgModule({
  imports: [
    CommonModule,
    GestionAdminRoutingModule
  ],
  declarations: [GestionTourComponent, GestionarTourPageComponent]
})
export class GestionAdminModule { }
