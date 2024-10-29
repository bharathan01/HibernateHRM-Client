import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-job-talentpool',
  templateUrl: './select-job-talentpool.component.html',
  styleUrls: ['./select-job-talentpool.component.css']
})
export class SelectJobTalentpoolComponent {
  constructor(private router:Router, private dialog:MatDialog){}
  addApplication(){
    this.dialog.closeAll()
  }
}
