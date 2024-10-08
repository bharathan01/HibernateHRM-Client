import { Component } from '@angular/core';

@Component({
  selector: 'app-mail-history-view',
  templateUrl: './mail-history-view.component.html',
  styleUrls: ['./mail-history-view.component.css'],
})
export class MailHistoryViewComponent {
  isMailDetsilsOpen:boolean = false
  openMailDetails() {
   this.isMailDetsilsOpen = true
  } 
}
