import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { Page404Component } from './components/page404/page404.component';
import { RouterModule } from '@angular/router';
import { InformationComponent } from './components/information/information.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    MenuComponent,
    Page404Component,
    InformationComponent,
    FooterComponent,
    HomePageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    FooterComponent,
    CardComponent
  ]
})
export class SharedModule { }
