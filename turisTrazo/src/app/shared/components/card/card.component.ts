import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() imageUrl!: string;
  @Input() position!: 'left' | 'right';
  @Input() text!: string;

  constructor() { }


  ngOnInit(): void {
    if (!this.imageUrl || !this.position || !this.text) throw new Error('Property Is Required');
  }



}
