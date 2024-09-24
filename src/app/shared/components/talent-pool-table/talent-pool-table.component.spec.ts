import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentPoolTableComponent } from './talent-pool-table.component';

describe('TalentPoolTableComponent', () => {
  let component: TalentPoolTableComponent;
  let fixture: ComponentFixture<TalentPoolTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalentPoolTableComponent]
    });
    fixture = TestBed.createComponent(TalentPoolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
