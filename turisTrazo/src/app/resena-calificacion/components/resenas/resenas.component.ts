import { Component, Input, OnInit } from '@angular/core';
import { Resena } from 'src/app/interface/models-type';

@Component({
  selector: 'resenas-card',
  templateUrl: './resenas.component.html',
  styleUrls: ['./resenas.component.css']
})
export class ResenasComponent  {

  @Input()
  imgagenUrl!: string;

  @Input()
  resena?: Resena;


}