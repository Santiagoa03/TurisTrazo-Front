import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './shared/components/page404/page404.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: '404',
    component: Page404Component
  },
  {
    path: 'sitio_interes',
    loadChildren: () => import('./sitio-interes/sitio-interes.module').then((m) => m.SitioInteresModule),

  },
  {
    path: 'tour',
    loadChildren: () => import('./tour/tour.module').then((m) => m.TourModule),

  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
