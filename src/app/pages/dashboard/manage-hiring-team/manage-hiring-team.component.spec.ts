import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHiringTeamComponent } from './manage-hiring-team.component';

describe('ManageHiringTeamComponent', () => {
  let component: ManageHiringTeamComponent;
  let fixture: ComponentFixture<ManageHiringTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageHiringTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageHiringTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
