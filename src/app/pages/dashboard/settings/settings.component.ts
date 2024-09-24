import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InviteMembersComponent } from 'src/app/shared/components/dialog-boxs/invite-members/invite-members.component';
import { UsersInfo } from 'src/app/shared/intserfaces/users.intserfaces';
import { demoUsersInfo } from 'src/app/utils/demoData';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  userInfo:UsersInfo[] = demoUsersInfo

constructor( private dialog: MatDialog,){

}

toggleInviteMember() {
  this.dialog.open(InviteMembersComponent, {
    width: '400px',
    height: 'auto',
  });
}
}
