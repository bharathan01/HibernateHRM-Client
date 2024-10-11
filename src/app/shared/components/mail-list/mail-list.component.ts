import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { demoInboxMail } from 'src/app/utils/demoData';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css'],
})
export class MailListComponent implements OnInit {
  selectedMailPage: string = '';
  mailDetails:any[] = [];
  starredMails: any = []; // avoid any on original data
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.selectedMailPage = params['value'];
      if (params['value'] === 'starred') {
        this.starredMail(params['value']);
      }
      else{
        this.mailDetails = demoInboxMail
      }
    });
  }
  starredMail(pageName: string) {
    this.mailDetails = this.mailDetails.filter((mail) => {
      return mail.starred == true;
    });
  }
  //avoid any on origianl data
  toggleStar(mail: any): void {
    mail.starred = !mail.starred; // Toggle the starred state
  }
}
