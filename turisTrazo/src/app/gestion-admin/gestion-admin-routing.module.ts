import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionTourComponent } from './components/gestion-tour/gestion-tour.component';

const routes: Routes = [

  {
    path: '',
    component: GestionTourComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAdminRoutingModule { }
