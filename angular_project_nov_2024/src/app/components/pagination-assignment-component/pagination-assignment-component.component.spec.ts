import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationAssignmentComponent } from './pagination-assignment-component.component';

describe('PaginationAssignmentComponentComponent', () => {
  let component: PaginationAssignmentComponent;
  let fixture: ComponentFixture<PaginationAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
