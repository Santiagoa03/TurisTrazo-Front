import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
