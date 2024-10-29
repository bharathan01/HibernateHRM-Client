import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-multiple-job-boards',
  templateUrl: './multiple-job-boards.component.html',
  styleUrls: ['./multiple-job-boards.component.css'],
})
export class MultipleJobBoardsComponent {
  taskForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    // Initialize the task form with the parent task and its subtasks
    this.taskForm = this.fb.group({
      name: ['Select All'],
      completed: [false],
      subtasks: this.fb.array([
        this.fb.group({
          name: 'Careers Page',
          type: 'free',
          status: 'not Published',
          action: 'publish',
          completed: [false],
        }),
        this.fb.group({
          name: 'Linkdln',
          type: 'free',
          status: 'not Published',
          action: 'publish',
          completed: [false],
        }),
        this.fb.group({
          name: 'Naukari',
          type: 'free',
          status: 'not Published',
          action: 'publish',
          completed: [false],
        }),
        this.fb.group({
          name: 'Indeed',
          type: 'free',
          status: 'not Published',
          action: 'publish',
          completed: [false],
        }),
      ]),
    });
  }

  ngOnInit(): void {}

  get subtasks() {
    return this.taskForm.get('subtasks') as FormArray;
  }
  partiallyComplete(): boolean {
    const subtasks = this.subtasks.controls;
    const someComplete = subtasks.some(
      (subtask: any) => subtask.value.completed
    );
    const allComplete = subtasks.every(
      (subtask: any) => subtask.value.completed
    );
    return someComplete && !allComplete;
  }

  updateParentTask(checked: boolean) {
    this.taskForm.patchValue({ completed: checked });
    this.subtasks.controls.forEach((subtask: any) => {
      subtask.patchValue({ completed: checked });
    });
  }

  // Update a specific subtask
  updateSubtask(checked: boolean, index: number) {
    this.subtasks.at(index).patchValue({ completed: checked });

    // Update parent task completed status if all subtasks are completed
    const allComplete = this.subtasks.controls.every(
      (subtask: any) => subtask.value.completed
    );
    this.taskForm.patchValue({ completed: allComplete });
  }

  onHandlePublish(value: string) {
    const message =
      value === 'publish'
        ? 'Job publish successful'
        : 'Job description saved successfully';

    this._snackBar.openFromComponent(ToastComponent, {
      data: { message: message },
      duration: 5 * 1000,
    });
    this.router.navigateByUrl('/dashboard/jobs');
    this.dialog.closeAll();
  }
}
