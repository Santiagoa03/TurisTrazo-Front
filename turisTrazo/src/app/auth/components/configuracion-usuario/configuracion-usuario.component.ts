import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ChangePassword, Usuario } from 'src/app/interface/models-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-configuracion-usuario',
  templateUrl: './configuracion-usuario.component.html',
  styleUrls: ['./configuracion-usuario.component.css']
})
export class ConfiguracionUsuarioComponent implements OnInit {

  cambiarContrasena: boolean = false;
  formSend: boolean = false;
  usuario!: Usuario;

  formRegister = this.fb.group({
    nombre: [{ value: '', disabled: true }],
    identidad: [{ value: '', disabled: true }],
    email: [{ value: '', disabled: true },],
    celular: [{ value: '', disabled: true }],
    usuario: [{ value: '', disabled: true }],
    contrasenaAntigua: '',
    contrasenaNueva: '',
  });


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
    if (this.authService.isLoggued()) {
      this.authService.getUserById(this.authService.getUser()?.numeroIdentidad || 0).subscribe((usuario) => {
        if (usuario) {
          this.usuario = usuario;
          this.llenarFormulario();
        }
      })
    } else {
      this.router.navigateByUrl("");
    }
  }


  llenarFormulario() {
    // Usa patchValue para asignar los valores del usuario al formulario
    this.formRegister.patchValue({
      nombre: this.usuario.nombre,
      identidad: String(this.usuario.numeroIdentidad),
      email: this.usuario.correo,
      celular: this.usuario.celular,
      usuario: this.usuario.tipoUsuario?.tipoUsuario
      // ... Otros campos del formulario que puedan coincidir con los campos del objeto usuario
    });
  }
  cambiarContrasenaV() {
    this.formSend = false;
    this.cambiarContrasena = !this.cambiarContrasena;
    if (this.cambiarContrasena) {
      this.formRegister.get('contrasenaAntigua')?.setValidators([Validators.required]);
      this.formRegister.get('contrasenaNueva')?.setValidators([Validators.required]);
      this.formRegister.get('contrasenaAntigua')?.setValue('');
      this.formRegister.get('contrasenaNueva')?.setValue('');

    } else {

      this.formRegister.get('contrasenaAntigua')?.clearValidators();
      this.formRegister.get('contrasenaNueva')?.clearValidators();
      this.formRegister.get('contrasenaAntigua')?.setValue('');
      this.formRegister.get('contrasenaNueva')?.setValue('');
    }

    this.formRegister.get('contrasenaAntigua')?.updateValueAndValidity();
    this.formRegister.get('contrasenaNueva')?.updateValueAndValidity();
  }


  cambiarContrasenaValidacion() {
    this.formSend = true;

    const infoPassword: ChangePassword = {
      id: this.usuario.numeroIdentidad,
      newPassword: this.formRegister.get('contrasenaNueva')?.value || '',
      oldPassword: this.formRegister.get('contrasenaAntigua')?.value || '',
    }

    this.authService.changePassword(infoPassword).subscribe((rsponse) => {
      this.toast.success("Su contraseña ha sido actualizada conrrectamente");
      this.formRegister.get('contrasenaAntigua')?.setValue('');
      this.formRegister.get('contrasenaNueva')?.setValue('');
      this.cambiarContrasena = false;
    }, () => {
      this.toast.error("La contraseña antigua no coincide");
    })
  }
}
