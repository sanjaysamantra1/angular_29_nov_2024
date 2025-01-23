import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCrudSubjectComponent } from './employee-crud-subject.component';

describe('EmployeeCrudSubjectComponent', () => {
  let component: EmployeeCrudSubjectComponent;
  let fixture: ComponentFixture<EmployeeCrudSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCrudSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCrudSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
