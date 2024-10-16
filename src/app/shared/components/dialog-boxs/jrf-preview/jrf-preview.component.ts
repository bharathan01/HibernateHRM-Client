import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-jrf-preview',
  templateUrl: './jrf-preview.component.html',
  styleUrls: ['./jrf-preview.component.css'],
})
export class JrfPreviewComponent implements OnInit {
  @ViewChild('descreptionContainer') descreptionContainer!: ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public jobDescription: any, private renderer:Renderer2, public dialogRef: MatDialogRef<JrfPreviewComponent>) {
  }
  ngOnInit(): void {
    this.descreptionContainer.nativeElement.innerHTML += `${this.jobDescription.jobDescription}`;
  }
  

  print(): void {
    const printContents = document.getElementById('print-section')?.innerHTML;
    if (printContents) {
      // Create an iframe for printing
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const doc = iframe.contentWindow?.document;

      if (doc) {
        doc.open();
        doc.write(`
          <html>
          <head>
            <title>Print</title>
            <style>
              @media print {
                body {
                  width: 80%;
                  margin: 0 auto;
                  padding: 20px;
                  box-sizing: border-box;
                }
                * {
                  color: black !important;
                  background-color: white !important;
                }
              }
            </style>
          </head>
          <body>
            ${printContents}
          </body>
          </html>
        `);
        doc.close();

        // Wait for the iframe to load before printing
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();

        // Remove the iframe after printing
        iframe.onload = () => {
          document.body.removeChild(iframe);
        };
      }
    }
  }
  onProceedJob(){
    this.dialogRef.close(true)
  }
}
