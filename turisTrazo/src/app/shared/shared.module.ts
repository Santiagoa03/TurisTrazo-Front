import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { Page404Component } from './components/page404/page404.component';
import { RouterModule } from '@angular/router';
import { InformationComponent } from './components/information/information.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [
    MenuComponent,
    Page404Component,
    InformationComponent,
    FooterComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
