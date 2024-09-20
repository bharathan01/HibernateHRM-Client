import { Component, Input } from '@angular/core';
import { MenuBar } from '../../intserfaces/layout.interfaces';

@Component({
  selector: 'app-aside-nav-btn',
  templateUrl: './aside-nav-btn.component.html',
  styleUrls: ['./aside-nav-btn.component.css'],
})
export class AsideNavBtnComponent {
  @Input() buttonAction!: MenuBar
}
