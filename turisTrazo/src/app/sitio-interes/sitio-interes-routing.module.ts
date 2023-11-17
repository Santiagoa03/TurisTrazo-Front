import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitioInteresPageComponent } from './pages/sitio-interes-page/sitio-interes-page.component';
import { DetalleSitioComponent } from './components/detalle-sitio/detalle-sitio.component';

const routes: Routes = [
  {
    path: ':id',
    component: DetalleSitioComponent
  },
  {
    path: '',
    component: SitioInteresPageComponent,
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
export class SitioInteresRoutingModule { }
