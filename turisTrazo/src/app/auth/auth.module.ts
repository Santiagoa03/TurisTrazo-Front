import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ConfiguracionUsuarioComponent } from './components/configuracion-usuario/configuracion-usuario.component';
import { FormsModule } from '@angular/forms'; //
import { ReactiveFormsModule } from '@angular/forms';
import {  } from '../shared/shared.module';

@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent,
    ConfiguracionUsuarioComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    RegisterPageComponent,
    LoginPageComponent
  ],
  providers:
    [
      
    ]

})
export class AuthModule { }
