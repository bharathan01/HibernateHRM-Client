import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManageEmailTemplateComponent } from '../../dialog-boxs/manage-email-template/manage-email-template.component';

@Component({
  selector: 'app-template-settings',
  templateUrl: './template-settings.component.html',
  styleUrls: ['./template-settings.component.css'],
})
export class TemplateSettingsComponent {
  constructor(private dialog: MatDialog) {}
  createOrManageEmailTempleate() {
    this.dialog.open(ManageEmailTemplateComponent, {
      data: '',
      width: 'auto',
      height: 'auto',
    });
  }
}
