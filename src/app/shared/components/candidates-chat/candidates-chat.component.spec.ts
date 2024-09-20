import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesChatComponent } from './candidates-chat.component';

describe('CandidatesChatComponent', () => {
  let component: CandidatesChatComponent;
  let fixture: ComponentFixture<CandidatesChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
