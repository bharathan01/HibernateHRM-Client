import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FileHandle, FilePreview } from 'src/app/shared/intserfaces/layout.interfaces';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css'],
})
export class FileUploaderComponent {
  constructor(private renderer: Renderer2) {}
  filePreviews: FilePreview[] = [];
  @ViewChild('InputImageFiled') InputImageFiled!: ElementRef;
  openFile() {
    this.renderer.selectRootElement(this.InputImageFiled.nativeElement).click();
  }
  onSelectedChanges($event: Event) {
    const inputFile = $event.target as HTMLInputElement;
    if (inputFile.files && inputFile.files.length > 0) {
      this.filePreviews = [
        {
          file: inputFile.files[0],
          type: inputFile.files[0].type,
          name: inputFile.files[0].name,
        },
      ];
    }
  }
  selectedFile(event: FileHandle[]) {
    const files: File = event[0].file;
    this.filePreviews = [
      {
        file: files,
        url: event[0].url,
        type: files.type,
        name: files.name,
      },
    ];
  }
  removeSelectedFile() {
    this.filePreviews.pop();
  }
}
