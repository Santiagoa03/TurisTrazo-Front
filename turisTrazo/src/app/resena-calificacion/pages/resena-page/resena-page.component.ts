import { Component, OnInit } from '@angular/core';
import { ResenaService } from '../../../services/resena.service';
import { Resena } from 'src/app/interface/models-type';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-resena-page',
  templateUrl: './resena-page.component.html',
  styleUrls: ['./resena-page.component.css']
})
export class ResenaPageComponent implements OnInit {

  isTourist!: Boolean;

  constructor(private resenaService: ResenaService, private authService: AuthService) { }


  ngOnInit(): void {
    this.isTourist = this.authService.isTourist();
  }



}
