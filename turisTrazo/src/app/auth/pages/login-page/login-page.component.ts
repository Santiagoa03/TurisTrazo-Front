import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Credenciales } from 'src/app/interface/models-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  private credenciales!: Credenciales;

  formSend: boolean = false;
  formLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private authService: AuthService, private fb: FormBuilder, private toast: ToastrService) { }

  sendFormLogin(): void {
    this.formSend = true;
    if (this.formLogin.invalid) return;

    this.credenciales = {
      email: this.formLogin.get('email')?.value || '',
      password: this.formLogin.get('password')?.value || ''
    }

    this.authService.login(this.credenciales);

  }

  resetPassword(): void {

    if (this.formLogin.get("email")?.invalid) {
      this.toast.error("ingrese un correo válido");
    } else {
      const email: string = this.formLogin.get("email")?.value || '';
      this.authService.resetPassword(email).subscribe(() => {
        this.toast.success("Se ha enviado un correo con la recuperación de la contraseña");
      }, () => {
        this.toast.error("Error al recuperar contraseña");
      })
    }
  }

}
