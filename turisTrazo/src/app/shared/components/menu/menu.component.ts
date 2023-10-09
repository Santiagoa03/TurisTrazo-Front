import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isCollapsed: boolean = false;
  logueado: boolean = false;
  nombre: string = 'Prueba';
  constructor(private router: Router) {

  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  sendLogin(): void {
    this.router.navigateByUrl('/')
  }

}
