import { Component } from '@angular/core';
import { EmployeeservicesubjectService } from '../../services/service/employeeservicesubject.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeecrudsubject',
  imports: [FormsModule],
  templateUrl: './employeecrudsubject.component.html',
  styleUrl: './employeecrudsubject.component.css'
})
export class EmployeecrudsubjectComponent {

  employees: any[] = [];
  isEditMode = false;
  formData: any = { id:'',
    name: '', gender: '', designation: '', salary: 0 };

  constructor(private employeeService: EmployeeservicesubjectService) { }

  ngOnInit() {
    this.fetchEmployees();
    console.log(this.employees);
  }


  fetchEmployees() {
    this.employeeService.getEmployees().subscribe((data: any) => {
      this.employees = data;
    },
      (err) => {
        console.error('Error Fetching Details', err);
      }
    );
  }

  // Open the form for Add or Edit
  openForm(mode: string, index?:any, emp?: any) {
    // this.isModalOpen=true;
    this.isEditMode = mode === 'update';

    if (this.isEditMode) {
      this.formData = { ...emp };
      this.formData.index = index;
      console.log(this.formData);

    }
    else {
      // console.log(this.employees[(this.employees.length-1)]);
      const lastVal = this.employees[(this.employees.length - 1)];

      console.log(lastVal);

      this.formData = { id: ++lastVal.id,name: '', gender: '', designation: '', salary: 0 };

      // this.formData = { id: ++lastVal.id, name: '', sal: 0, gender: '' };
      console.log(this.formData);

    }
  }



  submitForm() {
    if (this.isEditMode) {
      this.employeeService.updateEmployee(this.formData.id, this.formData)
    }
    else {
      this.employeeService.addEmployee(this.formData);

    }
    this.formData = { name: '', gender: '', designation: '', salary: 0 };
  }



  deleteEmp(index: number) {
    this.employeeService.deleteEmployee(index);
  }



}
