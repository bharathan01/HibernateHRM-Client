import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringFlowComponent } from './hiring-flow.component';

describe('HiringFlowComponent', () => {
  let component: HiringFlowComponent;
  let fixture: ComponentFixture<HiringFlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiringFlowComponent]
    });
    fixture = TestBed.createComponent(HiringFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
