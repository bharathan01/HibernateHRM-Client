import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsterviewComponent } from './insterview.component';

describe('InsterviewComponent', () => {
  let component: InsterviewComponent;
  let fixture: ComponentFixture<InsterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
