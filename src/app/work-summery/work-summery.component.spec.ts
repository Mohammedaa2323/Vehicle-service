import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSummeryComponent } from './work-summery.component';

describe('WorkSummeryComponent', () => {
  let component: WorkSummeryComponent;
  let fixture: ComponentFixture<WorkSummeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkSummeryComponent]
    });
    fixture = TestBed.createComponent(WorkSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
