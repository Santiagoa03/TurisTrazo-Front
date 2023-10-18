import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TipoUsuario, Usuario } from 'src/app/interface/models-type';
import { filter, tap } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  listUserType: TipoUsuario[] = [];
  formSend: boolean = false;
  formRegister = this.fb.group({
    name: ['', Validators.required],
    id: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    cellPhone: ['', Validators.required],
    user: [3, Validators.required],
    neighborhood: [''],
    city: [''],
    neighborhoodTour: [''],
    english: [null]
  });

  guiaId: number = 0;


  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.authService
      .userType()
      .pipe(
        tap((userTypes: TipoUsuario[]) => {

          const index = userTypes.findIndex(userType => userType.tipoUsuario!.toLowerCase() === 'administrador');
          if (index > -1) {
            userTypes.splice(index, 1);
          }

          this.guiaId = userTypes.find(user => user.tipoUsuario!.toLowerCase() === 'guia')!.id;
        })
      )
      .subscribe(resp => {
        this.listUserType = resp;
      });
  }


  sendFormRegister(): void {
    this.formSend = true;
    if (this.formRegister.invalid) return;
    const userType: TipoUsuario = {
      id: this.formRegister.get("user")?.value || 0,
    }

    const user: Usuario = {
      numeroIdentidad: Number(this.formRegister.get("id")?.value) || 0,
      nombre: this.formRegister.get("name")?.value || '',
      celular: this.formRegister.get("cellPhone")?.value || '',
      contrasena: this.formRegister.get("password")?.value || '',
      correo: this.formRegister.get("email")?.value || '',
      tipoUsuario: userType,
    }

    this.authService.saveUser(user).subscribe((resp) => {
    })

  }

  changeUserType(userType: string): void {
    const userTypeS = this.listUserType.find(type => type.id === Number(userType))?.tipoUsuario || '';

    if (userTypeS.toLowerCase() === this.authService.GUIDE) {
      this.formRegister.get("english")?.addValidators(Validators.required);
      this.formRegister.get("neighborhoodTour")?.addValidators(Validators.required);
      this.formRegister.get("city")?.addValidators(Validators.required);

    } else {
      this.formRegister.get("english")?.clearValidators();
      this.formRegister.get("neighborhoodTour")?.clearValidators();
      this.formRegister.get("city")?.clearValidators();

    }

    this.formRegister.updateValueAndValidity();


  }


}
