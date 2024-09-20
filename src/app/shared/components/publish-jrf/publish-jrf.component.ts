import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-publish-jrf',
  templateUrl: './publish-jrf.component.html',
  styleUrls: ['./publish-jrf.component.css']
})
export class PublishJrfComponent {
 @Input() JRFormOverviewData:any
}
