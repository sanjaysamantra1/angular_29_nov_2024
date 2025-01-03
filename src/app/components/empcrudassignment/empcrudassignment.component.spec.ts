import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcrudassignmentComponent } from './empcrudassignment.component';

describe('EmpcrudassignmentComponent', () => {
  let component: EmpcrudassignmentComponent;
  let fixture: ComponentFixture<EmpcrudassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpcrudassignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpcrudassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
