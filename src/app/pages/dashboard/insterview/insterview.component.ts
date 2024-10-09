import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleInterviewComponent } from 'src/app/shared/components/dialog-boxs/schedule-interview/schedule-interview.component';

@Component({
  selector: 'app-insterview',
  templateUrl: './insterview.component.html',
  styleUrls: ['./insterview.component.css'],
})
export class InsterviewComponent {
  constructor(private dialog: MatDialog) {}

  scheduleInterview() {
    this.dialog.open(ScheduleInterviewComponent, {
      width: 'auto',
      height: 'auto',
    });
  }
}
