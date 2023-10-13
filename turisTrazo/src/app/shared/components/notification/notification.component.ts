import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  @Input() message!: string;
  @Input() title!: string;

}
