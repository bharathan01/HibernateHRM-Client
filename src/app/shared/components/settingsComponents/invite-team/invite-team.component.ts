import { Component } from '@angular/core';


@Component({
  selector: 'app-invite-team',
  templateUrl: './invite-team.component.html',
  styleUrls: ['./invite-team.component.css']
})
export class InviteTeamComponent { 
  selectedMemberTable:string = 'currentMembers'

  selectMemberTable(tableName:string){
     this.selectedMemberTable = tableName
  }
}
