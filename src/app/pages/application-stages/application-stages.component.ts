import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidateProfileComponent } from 'src/app/shared/components/dialog-boxs/candidate-profile/candidate-profile.component';
import { singleApplicationData } from 'src/app/utils/demoData';

@Component({
  selector: 'app-application-stages',
  templateUrl: './application-stages.component.html',
  styleUrls: ['./application-stages.component.css'],
})
export class ApplicationStagesComponent {
  isFilterManuOpen: boolean = true;
  singleApplicationData: any = singleApplicationData;
  stages = [1, 2, 3, 5, 6];
  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private dialog:MatDialog
  ) {
    console.log(singleApplicationData[0].stages[0].stageName);
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

  formatLabel(value: number): string {
    if (value >= 1) {
      return Math.round(value / 1) + 'Days';
    }

    return `${value}`;
  }

  addNewStage(index: number) {
    singleApplicationData[0].stages.splice(index + 1, 0, {
      stageName: 'new stage',
      applications: [],
    });
  }
  closeStage(index: number) {
    confirm('Do you want to remove Stage')
    singleApplicationData[0].stages.splice(index, 1);
  }
  selectAllApplication(){
    console.log('hai')
  }
  openCandidatefrom(applicationId:number){
    this.dialog
    .open(CandidateProfileComponent, {
      data:applicationId,
    })
  }
}
