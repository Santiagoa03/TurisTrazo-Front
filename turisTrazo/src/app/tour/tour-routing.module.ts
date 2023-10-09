import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservarTourComponent } from './pages/reservar-tour/reservar-tour.component';

const routes: Routes = [{
  path: 'reservar',
  component: ReservarTourComponent
},
{
  path: '**',
  redirectTo: 'reservar'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
