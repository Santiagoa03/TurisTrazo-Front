import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-reservar-tour',
  templateUrl: './reservar-tour.component.html',
  styleUrls: ['./reservar-tour.component.css']
})
export class ReservarTourComponent {

  constructor(private authService: AuthService) { }

  get isGuide(): Boolean {
    return this.authService.isGuide();
  }
}
