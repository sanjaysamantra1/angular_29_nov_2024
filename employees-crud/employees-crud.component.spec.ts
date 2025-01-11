import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesCrudComponent } from './employees-crud.component';

describe('EmployeesCrudComponent', () => {
  let component: EmployeesCrudComponent;
  let fixture: ComponentFixture<EmployeesCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
