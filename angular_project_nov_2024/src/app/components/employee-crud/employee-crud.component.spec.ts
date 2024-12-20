import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EmployeeCRUDComponent } from './employee-crud.component';
import Swal from 'sweetalert2';

describe('EmployeeCRUDComponent', () => {
  let component: EmployeeCRUDComponent;
  let fixture: ComponentFixture<EmployeeCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCRUDComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial employees', () => {
    expect(component.employees.length).toBe(3);
  });

  it('should add new employee', () => {
    const initialLength = component.employees.length;
    component.newEmployee = { name: 'Test User', position: 'Tester' };
    component.addEmployee();
    expect(component.employees.length).toBe(initialLength + 1);
  });

  it('should delete employee', async () => {
    const initialLength = component.employees.length;
    spyOn(Swal, 'fire').and.returnValue(Promise.resolve({ isConfirmed: true } as any));
    await component.deleteEmployee(0);
    expect(component.employees.length).toBe(initialLength - 1);
  });

  it('should set selected employee when viewing', () => {
    const employee = { name: 'Test User', position: 'Tester' };
    component.viewEmployee(employee);
    expect(component.selectedEmployee).toEqual(employee);
  });

  it('should reset form when opening add modal', () => {
    component.newEmployee = { name: 'Test', position: 'Test' };
    component.openAddModal();
    expect(component.newEmployee).toEqual({ name: '', position: '' });
  });

  it('should not add employee with invalid form', () => {
    const initialLength = component.employees.length;
    component.newEmployee = { name: '', position: '' };
    component.addEmployee();
    expect(component.employees.length).toBe(initialLength);
  });
});