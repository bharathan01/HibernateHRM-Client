import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDialogComponent } from '../dialog-boxs/notification-dialog/notification-dialog.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SearchJobService } from 'src/app/core/services/search-job/search-job.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isDialogOpen: boolean = false;
  hidden: boolean = false;
  displayJobButtons: boolean = false;
  jobFilterTerm: string = 'new';
  isDisplayMenuOpen: boolean = false;
  displayJobhiringTeamHeader: boolean = false;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private searchService: SearchJobService
  ) {}

  ngOnInit() {
    // this.searchService.updateSearchTerm(this.jobFilterTerm);
    this.updateHeader(this.router.url);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => this.updateHeader(event.urlAfterRedirects));
  }

  onSearchTermChanged(event: any) {
    this.jobFilterTerm = event.target.value;
    this.searchService.updateSearchTerm(this.jobFilterTerm);
  }

  updateHeader(url: string) {
    switch (url) {
      case '/dashboard/jobs':
        this.displayJobButtons = true;
        this.displayJobhiringTeamHeader = false;
        break;
      case '/dashboard/jobs/add-candidate':
        this.displayJobhiringTeamHeader = true;
        this.displayJobButtons = false;
        break;
      case '/dashboard/jobs/import-resume':
        this.displayJobhiringTeamHeader = true;
        this.displayJobButtons = false;
        break;
      case '/dashboard/jobs/hiringteam':
        this.displayJobhiringTeamHeader = true;
        this.displayJobButtons = false;
        break;
      default:
        this.displayJobButtons = false;
        this.displayJobhiringTeamHeader = false;
    }
  }
  toggleDialog() {
    if (this.isDialogOpen) {
      this.dialog.closeAll();
    } else {
      this.dialog
        .open(NotificationDialogComponent, {
          position: { top: '90px', right: '40px' },
          width: '500px',
          height: '70%',
        })
        .afterClosed()
        .subscribe(() => {
          this.isDialogOpen = false;
          this.hidden = false;
        });
    }
    this.isDialogOpen = !this.isDialogOpen;
    this.hidden = !this.hidden;
  }
}
