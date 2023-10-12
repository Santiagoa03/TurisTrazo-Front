import { Component, OnInit } from '@angular/core';
import { ResenaService } from '../../../services/resena.service';
import { Resena } from 'src/app/interface/models-type';

@Component({
  selector: 'app-resena-page',
  templateUrl: './resena-page.component.html',
  styleUrls: ['./resena-page.component.css']
})
export class ResenaPageComponent implements OnInit {

  listResenas: Resena[] = [];

  constructor(private resenaService: ResenaService) { }


  ngOnInit(): void {
    this.resenaService.getAllResena().subscribe(resenas => this.listResenas = resenas);
  }



}
