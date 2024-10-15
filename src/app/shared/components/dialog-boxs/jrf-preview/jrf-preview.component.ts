import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jrf-preview',
  templateUrl: './jrf-preview.component.html',
  styleUrls: ['./jrf-preview.component.css']
})
export class JrfPreviewComponent {
  @Input() JRFormData:any
  
}
