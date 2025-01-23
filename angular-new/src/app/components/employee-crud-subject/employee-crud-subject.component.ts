import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeecrudService } from '../../services/employeecrud.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-crud-subject',
  imports: [FormsModule],
  templateUrl: './employee-crud-subject.component.html',
  styleUrl: './employee-crud-subject.component.css'
})
export class EmployeeCrudSubjectComponent {
  employees: any[] = [];
  isEditMode = false;
  editingEmployee: any = {} ;

  constructor(private employeeService: EmployeecrudService) {}

  ngOnInit(): void {
    this.employeeService.employees$.subscribe((data) => {
      this.employees = data;
    });
  }

  submitForm(form: any): void {
    console.log("--submit form---");
    // if (form.valid) {
      console.log("---valid form---");
      const employeeData: any = {
        id: form.value.id,
        name: form.value.name,
        department: form.value.department,
        position: form.value.designation,
        salary: form.value.salary,
      };
      console.log("--onsubmit functin---", employeeData);
      if (this.isEditMode) {
        this.employeeService.updateEmployee(employeeData);
        this.isEditMode = false;
        this.editingEmployee = {};
      } else {
        this.employeeService.addEmployee(employeeData);
      }
  
      form.reset();
    // }
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id);
  }

  editEmployee(id: number): void {
    const employee = this.employeeService.getEmployeeById(id);
    console.log("---edit employeee--", employee);
    if (employee) {
      this.isEditMode = true;
      this.editingEmployee = { ...employee }; 
    }
  }

  cancelEdit(form?: any): void {
    this.isEditMode = false;
    this.editingEmployee = null;
    form?.resetForm();
  }
}
