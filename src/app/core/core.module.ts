import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipe/searchpipe/search.pipe';
import { DragAndDropDirective } from './directive/dragNDrop/drag-and-drop.directive';

@NgModule({
  declarations: [
    SearchPipe,
    DragAndDropDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchPipe,
    DragAndDropDirective
  ]
})
export class CoreModule { }
