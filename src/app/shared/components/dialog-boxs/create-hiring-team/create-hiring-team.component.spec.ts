import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHiringTeamComponent } from './create-hiring-team.component';

describe('CreateHiringTeamComponent', () => {
  let component: CreateHiringTeamComponent;
  let fixture: ComponentFixture<CreateHiringTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHiringTeamComponent]
    });
    fixture = TestBed.createComponent(CreateHiringTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
