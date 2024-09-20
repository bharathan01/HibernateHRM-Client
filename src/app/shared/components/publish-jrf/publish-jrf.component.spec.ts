import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishJrfComponent } from './publish-jrf.component';

describe('PublishJrfComponent', () => {
  let component: PublishJrfComponent;
  let fixture: ComponentFixture<PublishJrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishJrfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishJrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
