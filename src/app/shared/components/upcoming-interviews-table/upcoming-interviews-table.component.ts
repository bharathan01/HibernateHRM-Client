import { Component } from '@angular/core';
import { Candidates } from '../../intserfaces/users.intserfaces';

@Component({
  selector: 'app-upcoming-interviews-table',
  templateUrl: './upcoming-interviews-table.component.html',
  styleUrls: ['./upcoming-interviews-table.component.css'],
})
export class UpcomingInterviewsTableComponent {


  upcomingInterviews: Candidates[] = [
    {
      candidate: 'EmilyJohnson',
      job: 'Linux-Kernel Engineer',
      interview: 'Task Interview',
      interviewer: 'Daniel John ',
      date: '22/05/2024',
      time: '3pm-4pm',
      status: 'scheduled',
    },
    {
      candidate: 'Jane Smith',
      job: 'Flutter Developer',
      interview: 'Face-To-Face Interview',
      interviewer: 'Jovel Jose  ',
      date: '24/05/2024',
      time: '11am-12am',
      status: 'rescheduled',
    },
    {
      candidate: 'Michael Brown',
      job: 'Robotic Engineer',
      interview: 'Video Interview',
      interviewer: 'Riya Kalam ',
      date: '24/05/2024',
      time: '3pm-4pm',
      status: 'scheduled',
    },
    {
      candidate: 'Alen george',
      job: 'Flutter Developer',
      interview: 'Task Interview',
      interviewer: 'Simal Susan  ',
      date: '27/05/2024',
      time: '11am-12am',
      status: 'scheduled',
    },
    {
      candidate: 'Alen george',
      job: 'Flutter Developer',
      interview: 'Task Interview',
      interviewer: 'Daniel John ',
      date: '27/05/2024',
      time: '3pm-4pm',
      status: 'scheduled',
    },
    {
      candidate: 'Alen george',
      job: 'Flutter Developer',
      interview: 'Task Interview',
      interviewer: 'Daniel John ',
      date: '28/05/2024',
      time: '11am-12am',
      status: 'scheduled',
    },
    {
      candidate: 'Alen george',
      job: 'Flutter Developer',
      interview: 'Task Interview',
      interviewer: 'Daniel John ',
      date: '28/05/2024',
      time: '3pm-4pm',
      status: 'scheduled',
    },
    {
      candidate: 'Alen george',
      job: 'Flutter Developer',
      interview: 'Task Interview',
      interviewer: 'Daniel John ',
      date: '29/05/2024',
      time: '3pm-4pm',
      status: 'scheduled',
    },
  ];
  tableHeaders = Object.keys(this.upcomingInterviews[0]) as Array<keyof Candidates>;
}
