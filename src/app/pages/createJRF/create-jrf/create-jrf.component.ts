import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-jrf',
  templateUrl: './create-jrf.component.html',
  styleUrls: ['./create-jrf.component.css'],
  providers: [DatePipe],
})
export class CreateJrfComponent {
  @ViewChild('contentToCopy', { static: false }) contentToCopy!: ElementRef;
  currentStageIndex: number = 0;
  // trak the state/progress of the form steps
  applicationStages: any[] = [
    {
      stageName: 'About Job',
      satgeDescription: 'Begin creating your job description.',
      stageState: {
        currentStage: true,
        completed: false,
      },
    },
    {
      stageName: 'Application Form',
      satgeDescription: 'Customize job application base on job',
      stageState: {
        currentStage: false,
        completed: false,
      },
    },
    {
      stageName: 'Hiring Flow',
      satgeDescription: 'Configure your hiring pipeline flow',
      stageState: {
        currentStage: false,
        completed: false,
      },
    },
  ];

  moveStageManually(stageIndex: number) {
    this.currentStageIndex = stageIndex;
    this.applicationStages[stageIndex].stageState.currentStage = true; 
  }

  moveApplicationStage() {
    this.applicationStages[this.currentStageIndex].stageState.completed = true;
    this.currentStageIndex += 1;
    this.applicationStages[this.currentStageIndex].stageState.currentStage =
      true;
  }
  previousApplicationStage() {
    this.currentStageIndex -= 1;
  }
}
