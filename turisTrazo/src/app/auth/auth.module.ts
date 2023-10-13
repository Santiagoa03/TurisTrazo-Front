import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ConfiguracionUsuarioComponent } from './components/configuracion-usuario/configuracion-usuario.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent,
    ConfiguracionUsuarioComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    RegisterPageComponent,
    LoginPageComponent
  ]

})
export class AuthModule { }
