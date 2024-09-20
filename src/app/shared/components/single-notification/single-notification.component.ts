import { Component, Input } from '@angular/core';
import { Notification } from '../../intserfaces/users.intserfaces';

@Component({
  selector: 'app-single-notification',
  templateUrl: './single-notification.component.html',
  styleUrls: ['./single-notification.component.css']
})
export class SingleNotificationComponent {
  @Input() notification!: Notification
}
