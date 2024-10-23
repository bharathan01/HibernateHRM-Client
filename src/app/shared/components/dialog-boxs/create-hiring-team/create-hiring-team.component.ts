import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Option } from 'src/app/shared/intserfaces/users.intserfaces';

@Component({
  selector: 'app-create-hiring-team',
  templateUrl: './create-hiring-team.component.html',
  styleUrls: ['./create-hiring-team.component.css'],
})
export class CreateHiringTeamComponent {
  constructor(public dialogRef: MatDialogRef<CreateHiringTeamComponent>) {}
  teamMembers: Option[] = [
    { name: 'Arun Ajayakumar' },
    { name: 'Amrutha Thulasi' },
    { name: 'Aswathy' },
    { name: 'Parvathy' },
    { name: 'Mereena' },
    { name: 'Sujodh' },
  ];
  onCancel() {
    this.dialogRef.close();
  }
  onSave() {
    this.dialogRef.close();
  }
}
