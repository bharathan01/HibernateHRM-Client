import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManageEmailTemplateComponent } from '../../dialog-boxs/manage-email-template/manage-email-template.component';
import { mailTemplates } from 'src/app/utils/demoData';

@Component({
  selector: 'app-template-settings',
  templateUrl: './template-settings.component.html',
  styleUrls: ['./template-settings.component.css'],
})
export class TemplateSettingsComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  emailTemplatName: string[] = [];
  ngOnInit(): void {
    this.emailTemplatName = Object.keys(mailTemplates);
  }

  createOrManageEmailTempleate(templatesName: string = '') {
    this.dialog.open(ManageEmailTemplateComponent, {
      data: templatesName,
      width: 'auto',
      height: 'auto',
    });
  }
}
