import { Component, Input, OnInit } from '@angular/core';
import { Imagen } from 'src/app/interface/models-type';

export interface SlideInterface {
  url: string;
  title: string;
}

@Component({
  selector: 'shared-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @Input() images: Imagen[] = [];

  constructor() {}

}
