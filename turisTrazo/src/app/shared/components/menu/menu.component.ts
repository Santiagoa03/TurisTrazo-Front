import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Usuario } from 'src/app/interface/models-type';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed: boolean = false;
  isLoggued!: Boolean;
  userLoggued!: Usuario | null;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggued = this.authService.isLoggued();
    this.userLoggued = this.authService.getUser();
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  sendLogin(): void {
    this.router.navigateByUrl('/')
  }

  logout(): void {
    this.authService.logout();
  }

}
