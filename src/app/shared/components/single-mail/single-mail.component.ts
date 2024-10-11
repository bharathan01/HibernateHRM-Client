import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { demoInboxMail } from 'src/app/utils/demoData';

@Component({
  selector: 'app-single-mail',
  templateUrl: './single-mail.component.html',
  styleUrls: ['./single-mail.component.css'],
})
export class SingleMailComponent implements OnInit {
  mailContent: any; //avoid any
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get 'id' from route parameters
    this.getMailContent(id)
  }

  getMailContent(id: number) {
    this.mailContent = demoInboxMail.filter(mail =>{
      return mail.id == id
    })
  }
}
