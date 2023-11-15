import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-resena-page',
  templateUrl: './resena-page.component.html',
  styleUrls: ['./resena-page.component.css']
})
export class ResenaPageComponent {

  constructor(private authService: AuthService) { }

  get isTourist(): Boolean {
    return this.authService.isTourist();
  }

}
