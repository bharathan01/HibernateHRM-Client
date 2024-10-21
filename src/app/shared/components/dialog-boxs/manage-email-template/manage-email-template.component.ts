import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-manage-email-template',
  templateUrl: './manage-email-template.component.html',
  styleUrls: ['./manage-email-template.component.css'],
})
export class ManageEmailTemplateComponent implements OnInit {
  public Editor = ClassicEditor;
  emailTemplateForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public candidateMailId: string,
    public dialogRef: MatDialogRef<ManageEmailTemplateComponent>,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.emailTemplateForm = this.fb.group({
      templateName: ['', Validators.required],
      templateType: ['', Validators.required],
      subject: ['', Validators.required],
      body: ['', Validators.required],
    });
  }
  onCancelTemplate() {
    this.dialogRef.close();
  }
  onSaveTemplate() {
    this.dialogRef.close();
  }
}
