import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeChild2Component } from './employee-child2.component';

describe('EmployeeChild2Component', () => {
  let component: EmployeeChild2Component;
  let fixture: ComponentFixture<EmployeeChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeChild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
