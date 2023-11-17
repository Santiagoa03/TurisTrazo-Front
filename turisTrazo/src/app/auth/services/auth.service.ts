import { CredentialsBearerService } from 'src/app/services/credentials-bearer.service';
import { Guia, TipoUsuario, Usuario } from './../../interface/models-type';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Credenciales } from 'src/app/interface/models-type';
import { ToastrService } from 'ngx-toastr';
import { Already } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private toastr: ToastrService, private http: HttpClient, private cookie: CookieService, private router: Router, private credentialsBearerService: CredentialsBearerService) { }

  URL_API_LOGIN: string = "/login"
  URL_API: string = "/api/users"
  ADMIN: string = "administrador"
  GUIDE: string = "guia"
  TOURIST: string = "turista"

  private user: Usuario | null = null;

  private options = {
    observe: 'response' as const,
    headers: new HttpHeaders()
  };

  login(credenciales: Credenciales) {
    this.cookie.deleteAll();
    this.http.post<HttpResponse<any>>(this.URL_API_LOGIN, credenciales, { observe: 'response', headers: this.options.headers }).subscribe(
      (response) => {
        const token = response.headers.get("Authorization");
        if (token != null) {
          this.options.headers = this.options.headers.set('Authorization', 'Bearer ' + token);
          this.credentialsBearerService.options.headers.set('Authorization', 'Bearer ' + token);
          this.cookie.set("Bearer", token.replace("Bearer", "").trim());
        }
      }, error => {
        this.toastr.error("Usuario o contraseña incorrectos")
      }, () => {

        this.http.get<Usuario>(`${this.URL_API}/email/${credenciales.email}`, { headers: this.options.headers }).subscribe((resp) => {
          this.cookie.set("id", String(resp.numeroIdentidad));
          this.cookie.set("name", String(resp.nombre));
          this.cookie.set("type_user", String(resp.tipoUsuario!.tipoUsuario));

          if (this.cookie.get("Bearer") != "") {
            this.router.navigateByUrl("");
          }

        })
      }
    );
  }

  saveUser(user: Usuario, guide?: Guia | null): Observable<HttpResponse<any>> {

    const body = {
      user: user,
      guide: guide
    }
    return this.http.post<HttpResponse<any>>(`${this.URL_API}/register`, body);
  }

  userType(): Observable<TipoUsuario[]> {
    return this.http.get<TipoUsuario[]>(`${this.URL_API}/user-type`);
  }

  alreadyEmail(email: string): Observable<Already> {
    return this.http.get<Already>(`${this.URL_API}/verify/${email}`);
  }


  isLoggued(): Boolean {
    if (!this.cookie.get("Bearer")) return false;
    const user: Usuario = {
      numeroIdentidad: Number(this.cookie.get("id")),
      nombre: this.cookie.get("name"),

    }
    this.user = user;
    return true;
  }

  isAdmin(): Boolean {
    if (!this.isLoggued()) return false;
    if (this.cookie.get("type_user").toLowerCase() === this.ADMIN) return true;
    return false;
  }

  isTourist(): Boolean {
    if (!this.isLoggued()) return false;
    if (this.cookie.get("type_user").toLowerCase() === this.TOURIST) return true;
    return false;
  }

  isGuide(): Boolean {
    if (!this.isLoggued()) return false;
    if (this.cookie.get("type_user").toLowerCase() === this.GUIDE) return true;
    return false;
  }

  logout(): void {
    this.cookie.deleteAll();
    this.user = null;
    window.location.reload();
  }

  getUser(): Usuario | null {
    if (!this.isLoggued()) return null;
    return this.user;
  }

  getHttpOptionsHeader() {
    return this.options.headers;
  }
}
