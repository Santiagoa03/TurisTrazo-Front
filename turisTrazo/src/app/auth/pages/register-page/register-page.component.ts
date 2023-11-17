import { NeighborhoodService } from './../../../services/neighborhood.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Barrio, Guia, TipoUsuario, Usuario } from 'src/app/interface/models-type';
import { tap } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  listUserType: TipoUsuario[] = [];
  listNeighborhood: Barrio[] = [];

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
  guide: Guia | null = null;

  constructor(private toastr: ToastrService, private authService: AuthService, private fb: FormBuilder, private router: Router, private neighborhoodService: NeighborhoodService) { }

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

    this.neighborhoodService.getAllNeighborhood().subscribe((resp) => {
      this.listNeighborhood = resp;
    })

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

  
    if (Number(userType.id) === this.guiaId) {

      const neighborhoodGuide: Barrio = {
        codigoPostal: Number(this.formRegister.get("neighborhoodTour")?.value) || 0
      }
      const guide: Guia = {
        barrioResidencia: this.formRegister.get("neighborhood")?.value || '',
        ciudadResidencia: this.formRegister.get("city")?.value || '',
        barrioGuia: neighborhoodGuide,
        ingles: Boolean(this.formRegister.get("english")?.value),
        usuario: user
      }
      this.guide = guide;
    }
    if (user.correo) {

      this.authService.alreadyEmail(user.correo).subscribe((resp) => {

        if (!resp.existe) {
          this.authService.saveUser(user, this.guide).subscribe(() => {
            this.router.navigateByUrl("/auth/login");
            this.toastr.success("Usuario creado con éxito");
            this.formRegister.reset();
            this.guide = null;
          })
        } else {
          this.toastr.error("El correo ingresado ya se encuentra registrado");
        }
      })

    }

  }

  changeUserType(userType: string): void {
    const userTypeS = this.listUserType.find(type => type.id === Number(userType))?.tipoUsuario || '';

    if (userTypeS.toLowerCase() === this.authService.GUIDE) {
      this.formRegister.get("english")?.addValidators(Validators.required);
      this.formRegister.get("neighborhoodTour")?.addValidators(Validators.required);
      this.formRegister.get("city")?.addValidators(Validators.required);
      this.formRegister.get("neighborhood")?.addValidators(Validators.required);

    } else {
      this.formRegister.get("english")?.clearValidators();
      this.formRegister.get("neighborhoodTour")?.clearValidators();
      this.formRegister.get("city")?.clearValidators();
      this.formRegister.get("neighborhood")?.clearValidators();

    }

    this.formRegister.get("english")?.updateValueAndValidity();
    this.formRegister.get("neighborhoodTour")?.updateValueAndValidity();
    this.formRegister.get("city")?.updateValueAndValidity();
    this.formRegister.get("neighborhood")?.updateValueAndValidity();

  }


}
