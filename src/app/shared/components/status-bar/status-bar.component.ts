import { Component } from '@angular/core';
import { TimelineEvent } from '../../intserfaces/users.intserfaces';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent {
  timelineEvents: TimelineEvent[] = [
    {
      datetime: '02:00pm 27/05/2024',
      description: 'The Job Requisition Form for Robotic Engineer position you submitted has been published.',
      buttonLabel: 'View Job',
      buttonLink: ''
    },
    {
      datetime: '11:00am 27/05/2024',
      description: 'Applications pooled for Linux-Kernel Engineer have been shortlisted.',
      buttonLabel: 'View Job',
      buttonLink: ''
    },
    {
      datetime: '03:00pm 24/05/2024',
      description: 'Notify Interviewer to schedule interview for Emily Johnson for Linux-Kernel Engineer position.',
      buttonLabel: 'View Profile',
      buttonLink: ''
    },
    {
      datetime: '02:00pm 24/05/2024',
      description: 'Shortlist applications for Linux-Kernel Engineer from Application pool.',
      buttonLabel: 'View Job',
      buttonLink: ''
    },
    {
      datetime: '11:30am 23/05/2024',
      description: 'Feedback on Emma Taylor for Face-To-Face Interview has been submitted.',
      buttonLabel: 'View Profile',
      buttonLink: ''
    }
  ];
}
