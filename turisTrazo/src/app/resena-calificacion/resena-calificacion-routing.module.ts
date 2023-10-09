import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResenaPageComponent } from './pages/resena-page/resena-page.component';

const routes: Routes = [{
  path: '',
  component: ResenaPageComponent
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResenaCalificacionRoutingModule { }
