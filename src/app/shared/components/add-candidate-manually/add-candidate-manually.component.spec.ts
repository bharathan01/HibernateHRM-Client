import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandidateManuallyComponent } from './add-candidate-manually.component';

describe('AddCandidateManuallyComponent', () => {
  let component: AddCandidateManuallyComponent;
  let fixture: ComponentFixture<AddCandidateManuallyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCandidateManuallyComponent]
    });
    fixture = TestBed.createComponent(AddCandidateManuallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
