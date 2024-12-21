import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCRUDComponent } from './employee.component';

describe('EmployeeCRUDComponent', () => {
  let component: EmployeeCRUDComponent;
  let fixture: ComponentFixture<EmployeeCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCRUDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
