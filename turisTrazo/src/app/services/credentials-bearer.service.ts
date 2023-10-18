import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CredentialsBearerService {

  options = {
    observe: 'response' as const,
    headers: new HttpHeaders()
  };
}
