import { Component } from '@angular/core';
import { CrudEmployeesService } from '../../services/crud-employees.service';
import { HttpClient } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-employees',
  imports: [FormsModule],
  templateUrl: './crud-employees.component.html',
  styleUrl: './crud-employees.component.css'
})
export class CrudEmployeesComponent {
  employees:any;
  isLoading:boolean = false;

constructor(public crudEmployeesService:CrudEmployeesService,private httpClient: HttpClient){}

employeeObject = Object.create(null);
eId: number = 0;
firstName: string = '';
lastName: string = '';
sal: number = 0;
gender: string = '';
id:string='';
updateUserId: number = 0;

employees_url = 'http://localhost:3000/employees';
ngOnInit(){
  this.isLoading = true;
  this.getUsers();
  
    

}

getUsers() {
  this.httpClient.get(this.employees_url).subscribe(response => {
   console.log(response);
   this.employees = response;
   this.isLoading = false;

   })
}

// getAllEmployees(){
//   this.isLoading = true;
//   const employees_url = 'http://localhost:3000/employees';
  
//     this.httpClient.get(employees_url).subscribe(response => {
//       this.isLoading = false;
//     console.log(response);
//     this.employees = response;})
// }

addEmployee(){
      this.employeeObject.eId = this.eId;
      this.employeeObject.firstName = this.firstName;
      this.employeeObject.lastName = this.lastName;
      this.employeeObject.sal = this.sal;
      this.employeeObject.gender = this.gender;
      this.employeeObject.id = this.id;
      this.crudEmployeesService.addNewEmployee(this.employeeObject).subscribe({
        next: (response) => {
          console.log('Employee added successfully:', response);
          this.getUsers();

        },
        error: (error) => {
          console.error('Error occurred while adding employee:', error);
        }
      });
      
      // this.getAllEmployees()
      this.eId = 0;
      this.firstName = '';
      this.lastName = '';
      this.sal = 0;
      this.gender = '';
      this.id='';
}
deleteEmployee(Id: any){
  this.crudEmployeesService.deleteEmployee(Id).subscribe({
    next: (response) => {
      console.log('Employee added successfully:', response);
      this.getUsers();

    },
    error: (error) => {
      console.error('Error occurred while adding employee:', error);
    }

  });
  
  
 
}
updateEmployee(){
      this.employeeObject.eId = this.eId;
      this.employeeObject.firstName = this.firstName;
      this.employeeObject.lastName = this.lastName;
      this.employeeObject.sal = this.sal;
      this.employeeObject.gender = this.gender;
      this.employeeObject.id = this.id;
      this.crudEmployeesService.updateEmployee(this.id,this.employeeObject).subscribe({
        next: (response) => {
          console.log('Employee added successfully:', response);
          this.getUsers();
        },
        error: (error) => {
          console.error('Error occurred while adding employee:', error);
        }
  
      });
      
      
}
getRecordToUpdate(emp:any){
  this.updateUserId = emp.eId;
    this.firstName = emp.firstName;
    this.lastName = emp.lastName;
    this.sal = emp.sal;
    this.gender = emp.gender;
    this.id=emp.id;
}

}
