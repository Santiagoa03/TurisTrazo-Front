import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Credenciales } from 'src/app/interface/models-type';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  private credenciales!: Credenciales;

  formLogin = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });


  constructor(private authService: AuthService, private fb: FormBuilder) { }

  prueba(): void {

    if (this.formLogin.invalid) return;

    this.credenciales = {
      email: this.formLogin.get('email')?.value || '',
      password: this.formLogin.get('password')?.value || ''
    }
    console.log(this.credenciales)

    this.authService.login(this.credenciales);

  }

}
