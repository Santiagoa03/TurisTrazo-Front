import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitioInteresPageComponent } from './pages/sitio-interes-page/sitio-interes-page.component';

const routes: Routes = [{

  path: '',
  component: SitioInteresPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitioInteresRoutingModule { }
