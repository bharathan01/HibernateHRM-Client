import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportResumeComponent } from './import-resume.component';

describe('ImportResumeComponent', () => {
  let component: ImportResumeComponent;
  let fixture: ComponentFixture<ImportResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportResumeComponent]
    });
    fixture = TestBed.createComponent(ImportResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
