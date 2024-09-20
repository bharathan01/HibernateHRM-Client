import { Component } from '@angular/core';
interface Option {
  name?: string;
  role?: string;
  profileImage?: string;
}

@Component({
  selector: 'app-manage-hiring-team',
  templateUrl: './manage-hiring-team.component.html',
  styleUrls: ['./manage-hiring-team.component.css'],
})
export class ManageHiringTeamComponent {
  selectedRole: string = '';
  selectedName: string = '';
  selectedTeams: Option[] = [];

  options: Option[] = [
    { name: 'Arun Ajayakumar', profileImage: '' },
    { name: 'Amrutha Thulasi', profileImage: '' },
    { name: 'Aswathy', profileImage: '' },
    { name: 'Parvathy', profileImage: '' },
    { name: 'Mereena', profileImage: '' },
    { name: 'Sujodh', profileImage: '' },
  ];
  accessTypes: Option[] = [
    {
      role: 'SuperAdmin',
    },
    {
      role: 'Department Head',
    },
    {
      role: 'Interviewer',
    },
    {
      role: 'Hiring manager',
    },
    {
      role: 'Recruiter',
    },
    {
      role: 'HR Manager',
    },
  ];

  isTeamSelected(): boolean {
    return this.selectedName !== '' && this.selectedRole !== '';
  }

  addTeamMember() {
    const selectedMember = this.options.find(
      (option) => option.name === this.selectedName
    );
    const isMenmberAlreadyAdded = this.selectedTeams.find(
      (data) => data.name === this.selectedName
    );
    
    const selectedOptions = {
      name: this.selectedName,
      role: this.selectedRole,
      profileImage: selectedMember?.profileImage,
    };
    this.selectedTeams.push(selectedOptions);
  }
  removeTeamMember(name: string | undefined) {
    this.selectedTeams = this.selectedTeams.filter((data) => data.name != name);
  }
}
