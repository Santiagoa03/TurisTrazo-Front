import { Component, OnInit } from '@angular/core';

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

  slides: SlideInterface[] = [
    { url: '/./assets/guatape.jpg', title: 'beach' },
    { url: '/./assets/comuna-13.jpg', title: 'boat' },
  ];
}
