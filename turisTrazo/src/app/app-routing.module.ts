import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: LoginPageComponent,
  },
  /*{
    path: 'countries',
    loadChildren: () =>
      import('./countries/country.module').then((m) => m.CountryModule),
  },*/
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
