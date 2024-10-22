import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { mailTemplates } from 'src/app/utils/demoData';

@Component({
  selector: 'app-manage-email-template',
  templateUrl: './manage-email-template.component.html',
  styleUrls: ['./manage-email-template.component.css'],
})
export class ManageEmailTemplateComponent implements OnInit {
  public Editor = ClassicEditor;
  emailTemplateForm!: FormGroup;
  isThereTemplateValues: any; //avoid any when know the type
  constructor(
    @Inject(MAT_DIALOG_DATA) public templateName: string,
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
    if (this.templateName) {
      this.getTemplateValues(this.templateName);
    }
  }
  get tempalteFormController() {
    return this.emailTemplateForm.controls;
  }
  // for getting the template value from demo files
  // if templateName is there
  getTemplateValues(templateName: string) {
    this.isThereTemplateValues = mailTemplates[templateName];
    this.emailTemplateForm.patchValue({
      templateName: templateName,
      templateType: templateName,
      subject: this.isThereTemplateValues.subject,
      body: this.isThereTemplateValues.body,
    });
  }
  onCancelTemplate() {
    this.dialogRef.close();
  }
  onSaveTemplate() {
    if (this.emailTemplateForm.valid) {
      this.dialogRef.close();
    }
    this.emailTemplateForm.markAllAsTouched();
  }
}
