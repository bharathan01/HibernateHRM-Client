import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-invite-members',
  templateUrl: './invite-members.component.html',
  styleUrls: ['./invite-members.component.css']
})
export class InviteMembersComponent {
  constructor(private fb:FormBuilder){}

  iniviteMemberDetails = this.fb.group({
    empolyeeId:['',Validators.required],
    name:['',Validators.required],
    accessType:['',Validators.required]
  })

  get inviteMemberController(){
    return this.iniviteMemberDetails.controls;
  }
}
