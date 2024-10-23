import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateHiringTeamComponent } from '../dialog-boxs/create-hiring-team/create-hiring-team.component';

@Component({
  selector: 'app-hiring-flow',
  templateUrl: './hiring-flow.component.html',
  styleUrls: ['./hiring-flow.component.css'],
})
export class HiringFlowComponent {
  @Output() previous: EventEmitter<boolean> = new EventEmitter();
  stagesSkeletonNumber: number[] = Array(5).fill(0); // for show the skeleton demo
  stages = ['Sourced', 'Applied', 'Contacted', 'Hired', 'Rejected'];
  constructor(private router: Router, private dialog: MatDialog) {}
  addNewStage(stageIndex: number) {
    this.stages.splice(stageIndex + 1, 0, 'Enter Name');
  }
  removeStage(stageIndex: number) {
    this.stages.splice(stageIndex, 1);
  }
  backToPreviousPage() {
    this.previous.emit(true);
  }
  onFinishJobAppliaction() {
    this.router.navigateByUrl('dashboard/jobs');
  }
  openHirngTeamPage() {
    this.dialog.open(CreateHiringTeamComponent, {
      width: 'auto',
      height: 'auto',
    });
  }
}
