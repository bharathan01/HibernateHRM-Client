import { Component } from '@angular/core';

@Component({
  selector: 'app-hiring-flow',
  templateUrl: './hiring-flow.component.html',
  styleUrls: ['./hiring-flow.component.css'],
})
export class HiringFlowComponent {
  stagesSkeletonNumber: number[] = Array(5).fill(0); // for show the skeleton demo
  stages = ['Sourced', 'Applied', 'Contacted', 'Hired', 'Rejected'];
  addNewStage(stageIndex: number) {
    this.stages.splice(stageIndex + 1, 0, 'Enter Name');
  }
  removeStage(stageIndex: number) {
    this.stages.splice(stageIndex, 1);
  }
}
