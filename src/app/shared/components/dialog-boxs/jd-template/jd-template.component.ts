import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { jobDescriptions } from 'src/app/utils/demoData';

@Component({
  selector: 'app-jd-template',
  templateUrl: './jd-template.component.html',
  styleUrls: ['./jd-template.component.css'],
})
export class JdTemplateComponent implements OnInit {
  jobTiltles: string[] = [];
  selectedJobTitle: string = '';
  selectedJobDescription: any; // avoid any
  constructor(public dialogRef: MatDialogRef<JdTemplateComponent>) {}
  ngOnInit(): void {
    this.getJdTiltle();
    this.selectedJobTitle = this.jobTiltles[0];
    this.onSelectJobTitle(this.jobTiltles[0]);
  }

  getJdTiltle(): void {
    jobDescriptions.forEach((jobs) => {
      this.jobTiltles.push(jobs.jobTitle);
    });
  }

  onSelectJobTitle(jobTitle: string) {
    this.selectedJobDescription = jobDescriptions.filter((jd) => {
      return jd.jobTitle == jobTitle;
    });
  }
  closeJobDescriptionBox() {
    this.dialogRef.close();
  }
  sendJobIdToParentAndClose(jobId: number) {
    this.dialogRef.close(jobId);
  }
}
