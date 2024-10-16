import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-create-appliation-form',
  templateUrl: './create-appliation-form.component.html',
  styleUrls: ['./create-appliation-form.component.css']
})
export class CreateAppliationFormComponent {
  readonly panelOpenState = signal(false);

}
