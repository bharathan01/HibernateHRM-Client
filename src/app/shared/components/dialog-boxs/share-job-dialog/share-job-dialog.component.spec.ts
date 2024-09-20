import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareJobDialogComponent } from './share-job-dialog.component';

describe('ShareJobDialogComponent', () => {
  let component: ShareJobDialogComponent;
  let fixture: ComponentFixture<ShareJobDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareJobDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareJobDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
