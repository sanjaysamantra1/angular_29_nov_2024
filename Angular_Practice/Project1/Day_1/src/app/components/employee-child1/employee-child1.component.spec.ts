import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeChild1Component } from './employee-child1.component';

describe('EmployeeChild1Component', () => {
  let component: EmployeeChild1Component;
  let fixture: ComponentFixture<EmployeeChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeChild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
