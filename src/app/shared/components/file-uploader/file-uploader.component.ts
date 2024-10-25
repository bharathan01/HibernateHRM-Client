import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import {
  FileHandle,
  FilePreview,
} from 'src/app/shared/intserfaces/layout.interfaces';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css'],
})
export class FileUploaderComponent {
  constructor(private renderer: Renderer2) {}
  filePreviews: FilePreview[] = [];
  // selecting the inputs
  //need two inputs to handle  directory upload and file and multiple file uploads
  @ViewChild('InputImageFiled') inputImageField!: ElementRef;
  @ViewChild('folderInput') folderInput!: ElementRef;

  openFileSelector() {
    this.triggerInputClick(this.inputImageField);
  }

  // Opens file input for selecting folders
  openFolderSelector() {
    this.triggerInputClick(this.folderInput);
  }

  // Handle file selection from either input
  onFilesSelected(event: Event) {
    this.addFiles((event.target as HTMLInputElement).files);
  }

  // pushing selected file from various methodes for handling and display
  addFiles(fileList: FileList | null) {
    if (fileList && fileList.length > 0) {
      Array.from(fileList).forEach((file: File) => {
        this.filePreviews.push({
          file: file,
          type: file.type,
          name: file.name,
        });
      });
    }
  }

  selectedFile(event: FileHandle[]) {
    event.forEach((file: any) => {
      this.filePreviews.push({
        file: file,
        type: file.type,
        name: file.name,
      });
    });
  }

  // Triggers a click event on the specified input element
  private triggerInputClick(inputElement: ElementRef) {
    this.renderer.selectRootElement(inputElement.nativeElement).click();
  }

  removeSelectedFile(index: number) {
    this.filePreviews.splice(index, 1);
  }
}
