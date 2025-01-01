import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCrudChild2Component } from './employee-crud-child-2.component';

describe('EmployeeCrudChild2Component', () => {
  let component: EmployeeCrudChild2Component;
  let fixture: ComponentFixture<EmployeeCrudChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCrudChild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCrudChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
