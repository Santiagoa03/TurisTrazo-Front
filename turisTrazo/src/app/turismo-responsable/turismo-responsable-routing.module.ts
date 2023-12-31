import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurismoResponsablePageComponent } from './pages/turismo-responsable-page/turismo-responsable-page.component';

const routes: Routes = [{
  path: '',
  component: TurismoResponsablePageComponent
},
{
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurismoResponsableRoutingModule { }
