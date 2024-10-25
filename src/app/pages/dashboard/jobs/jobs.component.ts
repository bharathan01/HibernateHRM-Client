import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchJobService } from 'src/app/core/services/search-job/search-job.service';
import { Job } from 'src/app/shared/intserfaces/users.intserfaces';
import { jobs } from 'src/app/utils/demoData';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent {
  jobFilterTerm: string = 'new';
  jobs: Job[] = jobs;
  isSearchAndFilterOpen: boolean = false;
  constructor(private router: Router) {}
  onChangeInputValue(events: Event) {
    this.jobFilterTerm = (events.target as HTMLInputElement).value;
  }
  OpenCreateJrf() {
    this.router.navigateByUrl('/dashboard/creat-jrf');
  }
}
