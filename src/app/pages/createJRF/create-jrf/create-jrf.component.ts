import { DomPortalOutlet } from '@angular/cdk/portal';
import { DatePipe } from '@angular/common';
import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { JdTemplateComponent } from 'src/app/shared/components/dialog-boxs/jd-template/jd-template.component';
import { MultipleJobBoardsComponent } from 'src/app/shared/components/dialog-boxs/multiple-job-boards/multiple-job-boards.component';
import {
  JobOption,
  Location,
} from 'src/app/shared/intserfaces/users.intserfaces';

// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'LL',
//   },
//   display: {
//     dateInput: 'DD-MM-YYYY',
//     monthYearLabel: 'YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'YYYY',
//   },
// };

@Component({
  selector: 'app-create-jrf',
  templateUrl: './create-jrf.component.html',
  styleUrls: ['./create-jrf.component.css'],
  providers: [DatePipe],
})
export class CreateJrfComponent implements AfterViewInit {
  @ViewChild('contentToCopy', { static: false }) contentToCopy!: ElementRef;
  applicationStep: string = 'applicationForm';
  // trak the state/progress of the form steps
  stateForTheTracker: any = {
    aboutJob: {
      active: true,
      completed: false,
    },
    applicationForm: {
      state: false,
      completed: false,
    },
    hiringStages: {
      state: false,
      completed: false,
    },
  };

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private datePipe: DatePipe,
    private dialogBox: MatDialog
  ) {}

  ngAfterViewInit(): void {}



  moveApplicationStage(stepName: string) {
    this.stateForTheTracker[stepName].completed = true;
    this.stateForTheTracker[stepName].active = true;
    this.applicationStep = stepName;
  }
}
