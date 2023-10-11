import { Component, Input } from '@angular/core';
import { Resena } from 'src/app/interface/models-type';

@Component({
  selector: 'resenas-list',
  templateUrl: './resenas.component.html',
  styleUrls: ['./resenas.component.css']
})
export class ResenasComponent {
  @Input()
  imgagenUrl!: string;

  @Input()
  resena?: Resena;
  




}
