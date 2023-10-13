import { Usuario } from './../../interface/models-type';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Credenciales } from 'src/app/interface/models-type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) { }

  URL_API_LOGIN: string = "/login"
  URL_API: string = "/api/users"

  private options = {
    observe: 'response' as const,
    headers: new HttpHeaders()
  };

  login(credenciales: Credenciales) {
    console.log(credenciales);
    this.cookie.deleteAll();
    this.http.post<HttpResponse<any>>(this.URL_API_LOGIN, credenciales, { observe: 'response', headers: this.options.headers }).subscribe(
      (response) => {
        const token = response.headers.get("Authorization");
        if (token != null) {
          this.options.headers = this.options.headers.set('Authorization', 'Bearer ' + token);
          this.cookie.set("Bearer", token.replace("Bearer", "").trim());
        }
      }, error => {
        alert("Usuario o contraseña inválidos");
      }, () => {
        console.log(this.options.headers);

        this.http.get<Usuario>(`${this.URL_API}/email/${credenciales.email}`, { headers: this.options.headers }).subscribe((resp) => {

          this.cookie.set("id", String(resp.numeroIdentidad));
          this.cookie.set("name", String(resp.nombre));
          this.cookie.set("type_user", String(resp.tipoUsuario.tipoUsuario));

          if (this.cookie.get("Bearer") != "") {
            this.router.navigateByUrl("");
          }

        })
      }
    );
  }


}
