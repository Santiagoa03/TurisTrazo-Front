import { Component, Input } from '@angular/core';

@Component({
  selector: 'resenas-list',
  templateUrl: './resenas.component.html',
  styleUrls: ['./resenas.component.css']
})
export class ResenasComponent {
  @Input()
  imgagenUrl!: string;

}
