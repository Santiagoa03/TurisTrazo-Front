import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css']
})
export class TourCardComponent {

  @Input()
  imagen!: string;

  @Input()
  titulo!: string;

  @Input()
  sitio!: string;


  @Input()
  id!: number;

  constructor() { }

}
