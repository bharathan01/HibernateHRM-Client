import { Component, ViewChild } from '@angular/core';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';

@Component({
  selector: 'app-import-resume',
  templateUrl: './import-resume.component.html',
  styleUrls: ['./import-resume.component.css']
})
export class ImportResumeComponent {
  @ViewChild(FileUploaderComponent) fileUploaderComponent!:FileUploaderComponent
  triggerOpenFolderSelector(){
    this.fileUploaderComponent.openFolderSelector()
  }
}
