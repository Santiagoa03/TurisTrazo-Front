import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservarTourComponent } from './pages/reservar-tour/reservar-tour.component';
import { DetalleTourComponent } from './components/detalle-tour/detalle-tour.component';
import { RegistrarTourComponent } from './components/registrar-tour/registrar-tour.component';

const routes: Routes = [
  {
    path: '',
    component: ReservarTourComponent,
  },
  {
    path: 'register',
    component: RegistrarTourComponent,
  },
  {
    path: ':id',
    component: DetalleTourComponent
  },

  {
    path: '**',
    redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
