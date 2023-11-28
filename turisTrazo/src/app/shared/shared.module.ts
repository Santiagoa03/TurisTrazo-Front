import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { Page404Component } from './components/page404/page404.component';
import { RouterModule } from '@angular/router';
import { InformationComponent } from './components/information/information.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardComponent } from './components/card/card.component';
import { ServicioHomeComponent } from './components/servicio-home/servicio-home.component';
import { CustomToastComponent } from './components/notification/notification.component';
import { SliderComponent } from './components/slider/slider.component';
import { ImageSliderComponent } from './components/imageSlider/imageSlider.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    MenuComponent,
    Page404Component,
    InformationComponent,
    FooterComponent,
    HomePageComponent,
    CardComponent,
    ServicioHomeComponent,
    CustomToastComponent,
    SliderComponent,
    ImageSliderComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    MenuComponent,
    FooterComponent,
    CardComponent,
    CustomToastComponent,
    SliderComponent
  
    
  ]
})
export class SharedModule { }
