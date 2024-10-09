import { Component } from '@angular/core';

@Component({
  selector: 'app-talent-pool',
  templateUrl: './talent-pool.component.html',
  styleUrls: ['./talent-pool.component.css'],
})
export class TalentPoolComponent {
  //demo array for create new array
  folders: any[] = [
    {
      folderName: 'Default',
      folderDiscription:
        'lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto consequuntu',
      candidateCount: 87,
    },
  ];

  //not an actual loggic
  addNewFolder() {
    this.folders.push(this.folders[0]);
  }
  // preventing the routing for edit folder name
  addText(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }
}
