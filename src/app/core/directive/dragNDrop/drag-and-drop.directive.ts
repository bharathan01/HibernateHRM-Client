import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from 'src/app/shared/intserfaces/layout.interfaces';

@Directive({
  selector: '[appDragAndDrop]',
})
export class DragAndDropDirective {
  constructor(private sanitizer: DomSanitizer) {}
  @Output() selectedFiles: EventEmitter<FileHandle[]> = new EventEmitter();
  @HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }
  @HostListener('dragleave', ['$event']) public OnDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop', ['$event'])
  public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    if (!evt.dataTransfer) {
      return;
    }

    let files: any[] = [];

    for (let i = 0; i < evt.dataTransfer.files.length; i++) {
      const file = evt.dataTransfer.files[i];
      files.push(file);
    }

    if (files.length > 0) {
      this.selectedFiles.emit(files);
    }
  }
}
