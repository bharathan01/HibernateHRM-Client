import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleJobBoardsComponent } from './multiple-job-boards.component';

describe('MultipleJobBoardsComponent', () => {
  let component: MultipleJobBoardsComponent;
  let fixture: ComponentFixture<MultipleJobBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleJobBoardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleJobBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
