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
  filterTeamNames: any;
  teamMembers: Option[] = [
    { name: 'Arun Ajayakumar' },
    { name: 'Amrutha Thulasi' },
    { name: 'Aswathy' },
    { name: 'Parvathy' },
    { name: 'Mereena' },
    { name: 'Sujodh' },
  ];
  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filterTheUserInput(inputValue)
  }

  filterTheUserInput(inputValue: string) {
    this.filterTeamNames = this.teamMembers.filter((member: any) => {
      return member.name.toLowerCase().includes(inputValue);
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
  onSave() {
    this.dialogRef.close();
  }
}
