import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmpCrudHttpService } from '../../services/emp-crud-http.service';

@Component({
  selector: 'app-emp-crud-http-service',
  imports: [NgxPaginationModule, FormsModule],
  templateUrl: './emp-crud-http-service.component.html',
  styleUrl: './emp-crud-http-service.component.css'
})

export class EmpCrudHttpServiceComponent {

  p: any;
  employees: any;
  isLoading: boolean = false;
  selectedEmployee: any = '';

  eId: number = 0;
  eName: string = '';
  eSalary: number = 0;
  eGender: string = '';
  
  updateEmpObject = Object.create(null);
  createEmpObject = Object.create(null);
  
  currentEmpIdToUpdate: string = '';

  empId: number = 0;
  empName: string = '';
  empSalary: number = 0;
  empGender: string = '';

  empService = inject(EmpCrudHttpService);

  ngOnInit() {
    console.log(`Inside init()`);
    this.getEmployees();
  }

  getEmployees() {
    this.empService.get().subscribe((data: any) => {
      this.employees = data;
    })
    console.log(this.employees);
  }

  ngDoCheck() {
    if (this.employees != undefined) {
      // this.isLoading = !this.isLoading;
    }
  }

  getCurrentRecord(employee: any) {
    this.selectedEmployee = employee;
    console.log(this.selectedEmployee);
  }

  getRecordToDelete(employee: any) {
    console.log("Delete ", employee);
    this.empService.deleteEmployee(employee.id).subscribe((data: any) => {
      console.log(data);
      this.getEmployees();
    });
  }

  getRecordToInsert(employee: any) {
    console.log(employee);
    this.empService.saveEmployee(employee).subscribe((data: any) => {
      console.log(data);
      this.getEmployees();
    });
  }

  updateCurrentRecord(employee: any) {
    console.log(employee);
    this.eId = employee.eId;
    this.eName = employee.name;
    this.eSalary = employee.sal;
    this.eGender = employee.gender;
    this.currentEmpIdToUpdate = employee.id;
  }

  updateNewRecord() {
    this.updateEmpObject.eId = this.eId;
    this.updateEmpObject.name = this.eName;
    this.updateEmpObject.sal = this.eSalary;
    this.updateEmpObject.gender = this.eGender;
    this.empService.updateEmployee(this.currentEmpIdToUpdate, this.updateEmpObject).subscribe(response => {
      console.log(response);
      this.getEmployees();
    })
  }

  insertNewRecord(){

    this.createEmpObject.eId = this.empId;
    this.createEmpObject.name = this.empName;
    this.createEmpObject.sal = this.empSalary;
    this.createEmpObject.gender = this.empGender;
    
    console.log(this.createEmpObject);

    this.empService.saveEmployee(this.createEmpObject).subscribe(response => {
      console.log(response);
      this.getEmployees();
    })

    this.empId = 0;
    this.empName = '';
    this.empSalary = 0;
    this.empGender = '';
  }
}
