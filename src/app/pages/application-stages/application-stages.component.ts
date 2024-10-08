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
import { singleApplicationData } from 'src/app/utils/demoData';

@Component({
  selector: 'app-application-stages',
  templateUrl: './application-stages.component.html',
  styleUrls: ['./application-stages.component.css'],
})
export class ApplicationStagesComponent implements OnInit {
  isFilterManuOpen: boolean = true;
  singleApplicationData: any = singleApplicationData;
  stages = [1, 2, 3, 5, 6];
  isOpenAddCandidate: boolean = false;
  //container where the stages name stored for drage and drop
  connectedDropLists: string[] = [];

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
          this.isFilterManuOpen = false;
        } else {
          this.isFilterManuOpen = true;
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
  selectAllApplication() {
    console.log('hai');
  }
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
}
