import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-share-job-dialog',
  templateUrl: './share-job-dialog.component.html',
  styleUrls: ['./share-job-dialog.component.css'],
})
export class ShareJobDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public jobLink: string) {}
  ShareJobLink: string = this.jobLink;
  isCopyLink: boolean = false;

  copyLink() {
    this.isCopyLink = true;
    setTimeout(() => {
      this.isCopyLink = false;
    }, 3000);
  }
}
