import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCrudChild1Component } from './employee-crud-child-1.component';

describe('EmployeeCrudChild1Component', () => {
  let component: EmployeeCrudChild1Component;
  let fixture: ComponentFixture<EmployeeCrudChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCrudChild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCrudChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
