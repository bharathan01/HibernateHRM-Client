import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InviteMembersComponent } from 'src/app/shared/components/dialog-boxs/invite-members/invite-members.component';
import { settingsMenu } from 'src/app/shared/intserfaces/layout.interfaces';
import { UsersInfo } from 'src/app/shared/intserfaces/users.intserfaces';
import { demoUsersInfo } from 'src/app/utils/demoData';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  userInfo: UsersInfo[] = demoUsersInfo;
  settingsManuBar: settingsMenu[] = [
    {
      manuBarName: 'Profile Info',
      icon: 'person',
      route:'/dashboard/settings'
    },
    {
      manuBarName: 'Notifications',
      icon: 'notifications',
      route:'notificatons'
    },
    {
      manuBarName: 'About Company',
      icon: 'inbox_customize',
      route:'about_company'
    },
    {
      manuBarName: 'Invite Member',
      icon: 'person_add',
      route:'invite_team'
    },
    {
      manuBarName: 'Email Templates',
      icon: 'list_alt',
      route:'email_template'
    },
  ];

  constructor(private dialog: MatDialog) {}

  toggleInviteMember() {
    this.dialog.open(InviteMembersComponent, {
      width: '400px',
      height: 'auto',
    });
  }
}
