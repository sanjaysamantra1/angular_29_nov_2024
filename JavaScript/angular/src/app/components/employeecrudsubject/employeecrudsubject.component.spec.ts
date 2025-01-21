import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecrudsubjectComponent } from './employeecrudsubject.component';

describe('EmployeecrudsubjectComponent', () => {
  let component: EmployeecrudsubjectComponent;
  let fixture: ComponentFixture<EmployeecrudsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeecrudsubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeecrudsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
