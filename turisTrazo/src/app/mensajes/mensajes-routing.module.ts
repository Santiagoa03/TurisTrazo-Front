import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensajeComponent } from './components/mensaje/mensaje.component';

const routes: Routes = [

  {
    path: '',
    component: MensajeComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensajesRoutingModule { }
