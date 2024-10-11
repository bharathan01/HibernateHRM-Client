import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SendMailComponent } from 'src/app/shared/components/dialog-boxs/send-mail/send-mail.component';
import { demoInboxMail } from 'src/app/utils/demoData';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css'],
})
export class MailsComponent {
  selectedMailPage: string = 'inbox';
  
  constructor(private dialog: MatDialog, private router:Router) {}
  

  changeMailPage(pageName: string) {
    this.selectedMailPage = pageName;
    this.router.navigate(['dashboard/mails-box'], {
      queryParams: { value: pageName }
    });
  }

  openMailBox() {
    this.dialog.open(SendMailComponent, {
      data: '',
      width: 'auto',
      height: 'auto',
    });
  }
}
