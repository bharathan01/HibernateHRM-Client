import { Component } from '@angular/core';
import { Notification } from 'src/app/shared/intserfaces/users.intserfaces';



@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.css'],
})
export class NotificationDialogComponent {
  
  notifications: Notification[] = [
    {
      message:
        'You have been assigned to publish a new Job Requisition Form that has been created.',
      user: 'Robert Brown',
      time: '10 min ago',
      date: '14/05/2024',
      button: 'View Job',
    },
    {
      message:
        'Face-to-Face Interview for James Watson on Robotic Engineer job has been Scheduled .',
      user: 'Alice Smith',
      time: '12:30 pm',
      date: '14/05/2024',
      button: 'Interview Scheduled',
    },
    {
      message:
        'Initial Screening for Emily Johnson on Linux-Kernel Engineer job has been Scheduled ',
      user: 'John Doe',
      time: '03:00 pm',
      date: '13/05/2024',
      button: 'Initial Screening',
    },
    {
      message:
        'Task Interview for Alen George for Flutter Developer position is pending',
      user: 'Jane Doe',
      time: '11:00 am',
      date: '13/05/2024',
      button: 'View Profile',
    },
    {
      message:
        'Submitted Feedback for Michael Brown  for Task Interview on Flutter Developer job ',
      user: 'Sophia Susan',
      time: '10:00 am',
      date: '13/05/2024',
      button: 'Notify Recruiter',
    },
    {
      message:
        'Task Interview for Alen George for Flutter Developer position is pending',
      user: 'Jane Doe',
      time: '12:00 am',
      date: '12/05/2024',
      button: 'View Profile',
    },
    {
      message:
        'You have been assigned to publish a new Job Requisition Form that has been created.',
      user: 'Robert Brown',
      time: '11:00 am',
      date: '12/05/2024',

      button: 'View Job',
    },
    {
      message:
        'Initial Screening for Emily Johnson on Linux-Kernel Engineer job has been Scheduled ',
      user: 'John Doe',
      time: '03:00 pm',
      date: '11/05/2024',
      button: 'Initial Screening',
    },
  ];
}
