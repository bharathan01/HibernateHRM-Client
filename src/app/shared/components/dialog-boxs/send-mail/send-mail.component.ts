import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { mailTemplates } from 'src/app/utils/demoData';
@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css'],
})
export class SendMailComponent implements OnInit {
  selectedMailBody: any; // avoid any when integration
  constructor(
    @Inject(MAT_DIALOG_DATA) public candidateMailId: string,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.setFormValues()
  }
  public Editor = ClassicEditor;

  singleMailForm = this.fb.group({
    to: ['', Validators.required],
    subject: ['', Validators.required],
    body: ['', Validators.required],
  });
  onChangeMailTemplate(event: Event) {
    const inputField = event.target as HTMLInputElement;
    const selectedMailOption = inputField.value;
    this.selectedMailBody = mailTemplates[selectedMailOption];
     
    this.singleMailForm.patchValue({
      subject:this.selectedMailBody.subject,
      body:this.selectedMailBody.body
    })
  }
  setFormValues(){
    this.singleMailForm.patchValue({
       to:this.candidateMailId,
       subject:'',
       body:''
    })
  }
  sendMail() {
    console.log(this.singleMailForm.value)
  }
}
