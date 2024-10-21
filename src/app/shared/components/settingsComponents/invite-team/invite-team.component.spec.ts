import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteTeamComponent } from './invite-team.component';

describe('InviteTeamComponent', () => {
  let component: InviteTeamComponent;
  let fixture: ComponentFixture<InviteTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InviteTeamComponent]
    });
    fixture = TestBed.createComponent(InviteTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
