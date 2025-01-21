import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudEmployeesService {
   employee_url:string='http://localhost:3000/employees/';
  
  constructor(private httpClient: HttpClient) { }
  
    addNewEmployee(employeeObject:any){
      
      //const employee_url='http://localhost:3000/employees';
      return this.httpClient.post(this.employee_url,employeeObject);

    
    }

    deleteEmployee(id:any){
     return this.httpClient.delete(this.employee_url+id);
      
    
  }
  updateEmployee(id:any,employeeObject:any){
    return this.httpClient.put(this.employee_url+id,employeeObject);
  }


}
