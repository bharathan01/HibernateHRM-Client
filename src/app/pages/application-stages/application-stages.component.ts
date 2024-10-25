import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidateProfileComponent } from 'src/app/shared/components/dialog-boxs/candidate-profile/candidate-profile.component';
import { CreateHiringTeamComponent } from 'src/app/shared/components/dialog-boxs/create-hiring-team/create-hiring-team.component';
import {
  applicationFormDetails,
  singleApplicationData,
} from 'src/app/utils/demoData';

@Component({
  selector: 'app-application-stages',
  templateUrl: './application-stages.component.html',
  styleUrls: ['./application-stages.component.css'],
})
export class ApplicationStagesComponent implements OnInit {
  isFilterMenuOpen: boolean = true;
  singleApplicationData: any = singleApplicationData; // avoid any when intergration
  isOpenAddCandidate: boolean = false;
  //container where the stages name stored for drage and drop
  connectedDropLists: string[] = [];
  isSelectCandidate: boolean = false;
  // storing the applications that selected ,avoid any
  selctedCandidateDetails = new Set<any>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.updateConnectedDropLists();
  }

  ngAfterViewInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isFilterMenuOpen = false;
        } else {
          this.isFilterMenuOpen = true;
        }
      });
    this.cdr.detectChanges();
  }

  /*@@ close the menu when clicks outside */
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    this.isOpenAddCandidate = false;
  }
  /*@@ Inside the menu, stop the click event from bubbling up to the document click 
 listener, which would otherwise immediately close the menu when clicking on it. */
  onMenuClick(event: Event) {
    this.isOpenAddCandidate = !this.isOpenAddCandidate;
    event.stopPropagation();
  }

  /*@@ notice period slider value calcuate  */
  formatLabel(value: number): string {
    if (value >= 1) {
      return Math.round(value / 1) + 'Days';
    }

    return `${value}`;
  }

  /*@@ create a unique stage name
      @@ for identify the darg and drop cintainer*/
  updateConnectedDropLists(): void {
    this.connectedDropLists = this.singleApplicationData[0].stages.map(
      (_: string, idx: number) => `stageDropList-${idx}`
    );
  }
  addNewStage(index: number) {
    singleApplicationData[0].stages.splice(index + 1, 0, {
      stageName: 'new stage',
      applications: [],
    });
    // create a append newly create stage neme to the array
    this.updateConnectedDropLists();
  }
  closeStage(index: number) {
    if (confirm('Do you want to remove Stage')) {
      singleApplicationData[0].stages.splice(index, 1);
    }
  }

  /*@@ methode for select all application in a stage
    **just for the demo purpose not optimal way 
      if no:appliaction > o(n^2) will be the time
      change according to the json data  
      ------------------------------------------------------------------------------------------------------- */
  selectAllApplication(selected: boolean, stageName: string) {
    let applicationStage;
    if (selected) {
      applicationStage = singleApplicationData[0].stages.find((data) => {
        return data.stageName === stageName;
      });

      applicationStage?.applications.map((app) => {
        this.selctedCandidateDetails.add(app ? app.applicationId : null);
      });
    } else {
      this.selctedCandidateDetails.clear();
    }
  }
  /* add single selcted application to the  selctedCandidateDetails sets*/
  toggleSelection(selected: boolean, applicationId: any) {
    selected
      ? this.selctedCandidateDetails.add(applicationId)
      : this.selctedCandidateDetails.delete(applicationId);
  }
  // Check if a candidate is selected
  isSelected(applicationId: number): boolean {
    return this.selctedCandidateDetails.has(applicationId);
  }
  /*---------------------------------------------------------------------------------------------------------------------- */

  
  openCandidatefrom(applicationId: number) {
    this.dialog.open(CandidateProfileComponent, {
      data: applicationId,
    });
  }

  // drag and drop application to multiple stages

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addHiringTeam() {
    this.dialog.open(CreateHiringTeamComponent, {
      width: 'auto',
      height: 'auto',
    });
  }
}
