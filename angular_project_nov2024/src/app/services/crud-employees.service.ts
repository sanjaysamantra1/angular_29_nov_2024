import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudEmployeesService {
   employee_url:string='http://localhost:3000/employees/';
  
  constructor(private httpClient: HttpClient) { }
  
    addNewEmployee(employeeObject:any){
      
      const employees_url='http://localhost:3000/employees';
      this.httpClient.post(employees_url,employeeObject).subscribe({
        next: (response) => {
          console.log('Employee added successfully:', response);
        },
        error: (error) => {
          console.error('Error occurred while adding employee:', error);
        }
      });

    
    }

    deleteEmployee(id:any){
      this.httpClient.delete(this.employee_url+id).subscribe({
        next: (response) => {
          console.log('Employee added successfully:', response);
        },
        error: (error) => {
          console.error('Error occurred while adding employee:', error);
        }

      });
      
      
    
  }
  updateEmployee(id:any,employeeObject:any){
    this.httpClient.put(this.employee_url+id,employeeObject).subscribe({
      next: (response) => {
        console.log('Employee added successfully:', response);
      },
      error: (error) => {
        console.error('Error occurred while adding employee:', error);
      }

    });
  }
  


}
