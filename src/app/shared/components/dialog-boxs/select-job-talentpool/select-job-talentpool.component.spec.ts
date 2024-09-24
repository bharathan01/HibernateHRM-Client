import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectJobTalentpoolComponent } from './select-job-talentpool.component';

describe('SelectJobTalentpoolComponent', () => {
  let component: SelectJobTalentpoolComponent;
  let fixture: ComponentFixture<SelectJobTalentpoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectJobTalentpoolComponent]
    });
    fixture = TestBed.createComponent(SelectJobTalentpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
